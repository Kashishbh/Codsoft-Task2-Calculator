document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');
    
    let input = '';
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            
            if (value === 'AC') {
                input = '';
                inputBox.value = '0';
            } else if (value === 'DEL') {
                input = input.slice(0, -1);
                inputBox.value = input || '0';
            } else if (value === '=') {
                try {
                    input = eval(input).toString();
                } catch {
                    input = 'Error';
                }
                inputBox.value = input;
            } else {
                if (input === 'Error') {
                    input = '';
                }
                input += value;
                inputBox.value = input;
            }
        });
    });
});
