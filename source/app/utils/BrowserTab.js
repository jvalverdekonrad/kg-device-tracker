class BrowserTabClass {
    
    update(newTitle) { 
        document.title = newTitle.toString();
    };

};

export const BrowserTab = new BrowserTabClass;