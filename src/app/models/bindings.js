class BodyBinder {
    constructor(element) {
        this.element = element;
    }
    bind() { 
        var theme = (storage.darkTheme) ? 'dark' : 'light';
        this.element.setAttribute('data-bs-theme', theme);
    }
}

class ToggleButtonBinder {
    constructor(element) {
        this.element = element;
    }
    bind() {
        if (storage.darkTheme) {
            this.element.removeAttribute('checked');
        }
        else {
            this.element.setAttribute('checked', '');
        }
    }
}

class ColorBinder {
    constructor(containers, colorScheme) {
        this.containers  = containers;
        this.colorScheme = colorScheme;
    }
    bind() {
        for (let i = 0; i < this.containers.length; i++) {
            const container = this.containers[i];
            if (storage.darkTheme) {
                container.style.color           = this.colorScheme.foreLight;
                container.style.backgroundColor = this.colorScheme.backDark;
            }
            else {
                container.style.color           = this.colorScheme.foreDark;
                container.style.backgroundColor = this.colorScheme.backLight;
            }
            }
    }
}

class ColorScheme {
    constructor(backDark, backLight, foreDark, foreLight) {
        this.backDark = backDark;
        this.backLight = backLight;
        this.foreDark = foreDark;
        this.foreLight = foreLight;
    }
    static with = (backDark, backLight, foreDark, foreLight) => 
   new ColorScheme(backDark, backLight, foreDark, foreLight);
}

class ThemeToggler {
    constructor(body, chkTrigger, colorBinders) {
        this.bodyBinder     = new BodyBinder(body);
        this.chkTrigger     = new ToggleButtonBinder(chkTrigger);
        this.colorBinders   = colorBinders;

        this.update();

        chkTrigger.addEventListener('click', () => {
            storage.toggleTheme();
            this.update();
        });
    }

    update() {
        this.bodyBinder.bind();
        this.chkTrigger.bind();

        for (let i = 0; i < this.colorBinders.length; i++) {
            this.colorBinders[i].bind();
        }
    }
}
