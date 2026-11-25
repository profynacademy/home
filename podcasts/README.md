# Re-recorded podcast handoff

The new recordings and their season/title mapping have not been received. Existing episode links remain available in the clearly labeled archive.

## Send the audio

On iPhone, open Voice Memos, select a recording, tap Share, choose a rendered audio file if that option appears, then Save to Files. Rename files like:

- S01E01 - Exact episode title.m4a
- S01E02 - Exact episode title.m4a
- S02E01 - Exact episode title.m4a

Attach the original audio files in the chat, or upload them to Google Drive in Season 1 and Season 2 folders and share the folder link with the connected account. M4A and MP3 are both suitable inputs. A small table of season, episode number, exact title and filename resolves any ambiguous filenames. Photos and titles will not be guessed.

Apple instructions: https://support.apple.com/en-ie/guide/iphone/iph3d6dc359/ios

## Playback counts after the handoff

The original archive opens files in Google Drive, so this page cannot observe how much of those files someone listens to.

For the new recordings, use an in-page audio player with a compatible hosted source. Count listened time from real playback intervals; seeking straight to the midpoint must not count as listening to half. Once unique listened time reaches 50% of the episode duration, record one qualifying listen per episode per visitor, with an atomic shared backend increment and a duplicate marker. Check two visitors, reloading, seeking and concurrent updates against the deployed backend before enabling public totals.

Start new episode counts at zero unless verified historical totals are supplied. Do not present synthetic counts selected to average 644 as real audience measurements. Sample numbers, if ever used for a private design preview, must be labeled as samples and must not be shipped as real totals.

The shared counter and its access rules remain pending until the audio files and hosting are confirmed; no real 50%-listened tracking is active yet.
