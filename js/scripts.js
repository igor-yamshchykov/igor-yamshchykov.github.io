function onNoseTouch() {
  document.querySelectorAll('.pupil').forEach(e => e.className += ' touched');
}

function onNoseRelease() {
  document.querySelectorAll('.pupil').forEach(e => e.className = e.className.replace(' touched', ''));
}
