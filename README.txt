Two installable phone apps (PWAs). No server or account needed; data is saved on the phone.

  Food Log  ->  index.html          (open the site root)
  Gym Log   ->  gym/index.html      (open <your site>/gym/)

Install
1. Upload this whole folder to any HTTPS static host (GitHub Pages, Netlify Drop, Cloudflare Pages).
   GitHub Pages: repo Settings > Pages > Deploy from a branch > pick the branch, folder "/ (root)".
2. Open the link on your phone (add /gym/ for the gym app).
   Android Chrome: menu, then Install app.
   iPhone Safari: Share, then Add to Home Screen.

Updating
After editing any file, change V in that app's sw.js (e.g. "gymlog-v1" -> "gymlog-v2")
so installed phones pick up the new version.

Gym Log features
- Start a workout, add exercises, log weight x reps per set, tick sets as done
- New exercises are pre-filled with what you did last time
- Rest timer starts when you tick a set (60s / 90s / 2 min / 3 min, beeps and vibrates)
- History with duration and total volume, one-tap "Repeat" of a past workout
- Progress chart per exercise (heaviest set + estimated 1-rep max), personal records
- Export / import a JSON backup (Data tab) - do this before changing phones
