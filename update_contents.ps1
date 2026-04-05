For ($i=1; $i -le 16; $i++) {
    $file = "src\components\Slide$i.tsx"
    if (Test-Path $file) {
        Write-Host "Updating content of $file"
        $content = Get-Content $file -Raw
        
        # 1. Update component name (e.g., Slide7 -> Slide6)
        # Search for 'function Slide\d+' and replace with 'function Slide$i'
        $content = $content -replace "function Slide\d+", "function Slide$i"
        
        # 2. Update page count logic
        # Replace "XX / YY" where YY is 17 or 18 with "X / 16"
        # We use a padded string for the page number
        $pageStr = $i.ToString("00")
        $content = $content -replace "\d+\s*/\s*1[78]", "$pageStr / 16"
        
        Set-Content $file $content -NoNewline
    }
}
