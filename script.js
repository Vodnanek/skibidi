let clickCount = 0;

document.getElementById("myButton").addEventListener("click", function() {
    clickCount++;
    if (clickCount === 1) {
        alert('Ještě čtyřikrát')
    }
    else if (clickCount === 2) {
        alert('Ještě třikrát')
    }
    else if (clickCount === 3) {
        alert('Ještě dvakrát')

    }
    else if (clickCount === 4) {
        alert('Ještě jednou')

    }
    else if (clickCount === 5) {
        alert('hahahahahahahahahaha')
        
        window.location.href ="https://www.youtube.com/watch?v=xvFZjo5PgG0";
    }
});
