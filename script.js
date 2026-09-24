function showMessage() {
    const msg = document.getElementById('message');
    msg.innerHTML = '🎉 Professional Workflow: Fork -> Clone -> Branch -> Commit -> Push -> PR Success! Deployed Successfully!';
    msg.style.display = 'block';
    msg.style.color = '#00ff88';
    msg.style.fontWeight = 'bold';
    document.getElementById('clickMeBtn').innerText = 'Success! ✅';
}

// Also support click listener
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('clickMeBtn');
    if(btn) {
        btn.addEventListener('click', showMessage);
    }
});
