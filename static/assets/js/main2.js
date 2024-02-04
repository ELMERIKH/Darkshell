var password = 'password123';

$(document).ready(function() {
    let passwordForm = document.getElementById("passwordForm");
    passwordForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        var enteredPassword = document.getElementById("sipassword").value;
        console.log("Entered Password:", enteredPassword);

        if (enteredPassword === password) {
            console.log("Password Matched. Granting access.");
            showGranted();
        } else {
            console.log("Incorrect Password. Showing failed message.");
            showFailed();
        }
    });
});

function showGranted() {
    document.getElementById("password-box").style.display = "none";
    document.getElementById("granted-box").style.display = "block";
    setTimeout(function() {
        showAccessing();
        window.location.replace("/index");
    }, 1800);
}

function showAccessing() {
    document.getElementById("granted-box").style.display = "none";
    document.getElementById("accessing-box").style.display = "block";
    createIframe();
    startProgressBar();
}

function showFailed() {
    document.getElementById("password-box").style.display = "none";
    document.getElementById("denied-box").style.display = "block";
    document.getElementById("sipassword").value = '';
    setTimeout(revertToPassword, 2000);
}

function revertToPassword() {
    document.getElementById("denied-box").style.display = "none";
    document.getElementById("password-box").style.display = "block";
}

function showLoading() {
    document.getElementById("password-box").style.display = "none";
    document.getElementById("accessing-box").style.display = "none";
    document.getElementById("video-box").style.display = "block";
}

function startProgressBar() {
    var a = 0;
    if (a == 0) {
        a++;
        var width = 1;
        var pg = document.getElementById("progressBar");
        var interval = setInterval(increasePercentage, 30);

        function increasePercentage() {
            if (width >= 100) {
                clearInterval(interval);
                setTimeout(showLoading, 500);
            } else {
                width++;
                pg.style.width = width + "%";
                $("#accessing-loading-percentage").html(width + "%");
            }
        }
    }
}
