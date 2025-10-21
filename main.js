let profile = [{userName: `Alice`}, 25, true, {location: `New York`}, [`rock climbing`, `cooking`, `coding`]];

console.log(profile[0].userName, profile[4][1]);

profile[1] = 19;

profile[4].push(`reading`);

console.log(profile);



// MDN and W3C schools very helpful with pushing into nested array, not adding new string as new element to parent array!
// also useful for accessing from nested array, after playing with code got me close, but not exactly there.
