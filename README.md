# Live Reload Html

### Apply changes without reloading the page

## Load source


```HTML
<script src="https://unpkg.com/live-reload-html@1.0.2/live-reload-html.js"></script>
```

## Usage
```HTML
<script>

 var check_chenge_time = 2000;
 var check_url = ''; // current page url
 var originDebug = "http://localhost:8000"; // your localhost origin for test

 liveReload(check_chenge_time, check_url, originDebug);
</script>
```
OR
```HTML
<script>
 liveReload(2000,'', "http://localhost:8000");
</script>
```

#### Attributes:
- Apply body changes
 - Reload style files
