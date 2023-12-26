
        // Get elements by ID
        let add = document.getElementById('increment');
        let remove = document.getElementById('decrement');
        let int = document.getElementById('number');
        let integer = 0;

        // Add event listener for increment button
        add.addEventListener('click', function() {
            integer += 1;
            int.innerHTML = integer;
        });

        // Add event listener for decrement button
        remove.addEventListener('click', function() {
            integer -= 1;
            int.innerHTML = integer;
        });

