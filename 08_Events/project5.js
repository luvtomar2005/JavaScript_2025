const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
      <table>
        <tr>
          <th>Key</th>
          <th>Keycode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === ' ' ? 'Space' : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `;
});


/*
“How does the system know which key we are pressing? Are those predefined?”
Yes  they are predefined by the browser + OS + keyboard driver.
Every key on your keyboard has a hardware scan code.
The operating system translates that into a virtual key code.
The browser exposes this info via the KeyboardEvent object (e).
So when you press a key:
Keyboard hardware sends a signal →
OS interprets the signal as a key code →
Browser creates an event object (e) →
JavaScript can read e.key, e.keyCode, and e.code.
*/