/* Fuse Frequency — static part loader (readable sources in frequency.part*.txt) */
(async function () {
  'use strict';
  const parts = ["frequency.part0.txt", "frequency.part1.txt", "frequency.part2.txt"];
  const texts = await Promise.all(parts.map((p) => fetch(p + '?v=20261001-freq').then((r) => {
    if (!r.ok) throw new Error('Failed to load ' + p);
    return r.text();
  })));
  (0, eval)(texts.join(''));
})().catch(function (err) { console.error('Fuse Frequency failed to load', err); });
