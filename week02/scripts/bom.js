document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');

    button.addEventListener('click', function () {
        const chapter = input.value.trim();
        if (chapter !== '') {
            const li = document.createElement('li');
            li.textContent = chapter;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = '❌';
            deleteButton.setAttribute('aria-label', `Remove ${chapter}`);

            deleteButton.addEventListener('click', function () {
                list.removeChild(li);
                input.focus();
            });

            li.append(deleteButton);
            list.append(li);
            input.value = '';
        }
        input.focus();
    });
});
