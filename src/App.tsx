/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/Slide5';

export default function App() {
  return (
    <main className="h-screen w-full overflow-y-auto snap-y snap-mandatory bg-white">
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
    </main>
  );
}
