For ($i=7; $i -le 17; $i++) {
    $old = "src\components\Slide$i.tsx"
    $new = "src\components\Slide" + ($i - 1) + ".tsx"
    if (Test-Path $old) {
        Write-Host "Renaming $old to $new"
        Move-Item $old $new -Force
    }
}
