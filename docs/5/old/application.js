var Application = {
    created() {
        window.addEventListener("load", this.load);
        window.addEventListener("beforeunload", this.save);
    }
    destroyed () {
        window.removeEventListener("beforeunload", this.load);
        window.removeEventListener("beforeunload", this.save);
    },
    methods: {
        load(event) {
            console.log('loading');
            /*
            for (let i=0; i<window.sessionStorage.length; i++) {
                const key = window.sessionStorage.key(i);
                document.querySelector(`[name="${key}"]`).checked = true;
            }
            const value = window.sessionStorage.getItem(this.name) || window.localStorage.getItem(this.name);
            if (value && value === this.value) {
                console.log('load', this.name, value);
                this.checked = true;
            }
            */
        },
        save(event) {
            for (let i=0; i<window.sessionStorage.length; i++) {
                const key = window.sessionStorage.key(i);
                const value = window.sessionStorage.getItem(key);
                window.localStorage.setItem(key, value);
            }
//            event.returnValue = "編集中のものは保存されませんが、よろしいですか？";
        },
    }
}

