
        // Mobile menu toggle
        const menuButton = document.getElementById('menuButton');
        const mobileMenu = document.getElementById('mobileMenu');

        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Loan calculator functionality
        const amountSlider = document.getElementById('amountSlider');
        const daysSlider = document.getElementById('daysSlider');
        const amountDisplay = document.getElementById('amountDisplay');
        const daysDisplay = document.getElementById('daysDisplay');
        const totalAmount = document.getElementById('totalAmount');
        const loanAmount = document.getElementById('loanAmount');
        const interestAmount = document.getElementById('interestAmount');
        const platformFee = document.getElementById('platformFee');

        function calculateLoan() {
            const amount = parseInt(amountSlider.value);
            const days = parseInt(daysSlider.value);

            // Calculate fees (with 12% monthly interest rate)
            const monthlyInterestRate = 0.12;
            const dailyInterestRate = monthlyInterestRate / 30; // Asumiendo un mes de 30 días
            const interest = amount * dailyInterestRate * days;
            const fee = 300; // Comisión fija de 300
            const total = amount + interest + fee;

            // Update displays
            amountDisplay.textContent = `RD$ ${amount.toLocaleString()}`;
            daysDisplay.textContent = `${days} días`;
            totalAmount.textContent = `RD$ ${Math.round(total).toLocaleString()}`;
            loanAmount.textContent = `RD$ ${amount.toLocaleString()}`;
            interestAmount.textContent = `RD$ ${Math.round(interest).toLocaleString()}`;
            platformFee.textContent = `RD$ ${fee.toLocaleString()}`;
        }

        amountSlider.addEventListener('input', calculateLoan);
        daysSlider.addEventListener('input', calculateLoan);

        // Initial calculation
        calculateLoan();

        function enviarWhatsApp() {
            const amount = document.getElementById('amountDisplay').textContent;
            const days = document.getElementById('daysDisplay').textContent;
            const total = document.getElementById('totalAmount').textContent;
            
            const mensaje = `Hola, estoy interesado en un préstamo de ${amount} a ${days}. El total a devolver sería ${total}.`;
            const encodedMensaje = encodeURIComponent(mensaje);
            const whatsappURL = `https://wa.me/+18094457259?text=${encodedMensaje}`;
            
            window.open(whatsappURL, '_blank');
        }