---
---
/*/ Initialize Firebase
var config = {
  apiKey: "AIzaSyCcZyFFl_BOCDlHLgn_vgeNLeOLYG_0ruw",
  authDomain: "bekti.firebaseapp.com",
  databaseURL: "https://bekti.firebaseio.com",
  storageBucket: "firebase-bekti.appspot.com",
  messagingSenderId: "668464713113"
};
firebase.initializeApp(config);
*/
//Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        /*
          .then(() => {
            return navigator.serviceWorker.ready;
          })
          .then(reg => {
            reg.pushManager.subscribe({
              userVisibleOnly:true
            })
            .then(sub => console.log('endpoint : ', sub.endpoint))
            .catch(e => console.log('%c 😶 %c\n  Ehhmp..\n','font-size:50px; color:#bcbcbc;','font-size:20px;',e));
          })
        */
        .then(function(reg) {
            // Registration was successful
            console.log(reg.scope);

            // updatefound is fired if service-worker.js changes.
            reg.onupdatefound = function() {
                var installingWorker = reg.installing;
  
                installingWorker.onstatechange = function() {
                    ga('send', 'event','Progressive Web App', 'Service Worker State', installingWorker.state);
                    /*
                    switch (installingWorker.state) {
                        case 'installed':
                            if (navigator.serviceWorker.controller) {
                                // At this point, the old content will have been purged and the fresh content will
                                // have been added to the cache.
                                // It's the perfect time to display a "New content is available; please refresh."
                                // message in the page's interface.
                                //console.log('New or updated content is available.');
                                showToast(`New or updated content is available.`);
                            } else {
                                // At this point, everything has been precached.
                                // It's the perfect time to display a "Content is cached for offline use." message.
                                //console.log('Content is now available offline!');  
                                getCacheTotalSize().then(function (size) {
                                    //console.log(size);
                                showToast(`Content is now available offline! [Cached: ${size} KB]`);  
                            });
                        }
                            break;
  
                        case 'redundant':
                                console.error('The installing service worker became redundant.');
                                break;
                    }
                    */
                };
            };
        })
        .catch(err => console.error('%c 😨\n', 'font-size:60px; color:red', err));

    //Check to see whether the service worker is controlling the page.
    if (navigator.serviceWorker.controller) {
        // If .controller is set, then this page is being actively controlled by the service worker.
        console.info('%c 🤘', 'font-size:70px; color: #bada55' /*,reg*/ );
        
    } else {
        // If .controller isn't set, then prompt the user to reload the page so that the service worker can take
        // control. Until that happens, the service worker's fetch handler won't be used.
        console.info('%c  ⚓\n%cPlease reload this page to allow the service worker to handle network operations.', 'font-size:60px; color:green', 'background-color:#333;color:#fff;');
    }
} else {
    // The current browser doesn't support service workers.
    console.log('%c   🗿\n%cService workers are not supported.', 'font-size:50px;color:#bcbcbc;', 'background-color:#333;color:#fff;');
}

/*
function showToast(msg) {
    let snackbar = document.getElementById('snackbar');
    snackbar.innerHTML = msg;
    snackbar.classList.add('show', setTimeout(function() {
        snackbar.className = snackbar.className.replace("show", "").trim();
    }, 6400));
}

async function getCacheTotalSize() {
    // Note: opaque (i.e. cross-domain, without CORS) responses in the cache will return a size of 0.
    const cacheNames = await caches.keys();
  
    let cacheSize = 0;
  
    const sizePromises = cacheNames.map(async cacheName => {
      const cache = await caches.open(cacheName);
      const keys = await cache.keys();
  
      await Promise.all(keys.map(async key => {
        const response = await cache.match(key);
        const blob = await response.blob();
        cacheSize += blob.size;
      }));
  
      //console.log(`Cache ${cacheName}: ${cacheSize} bytes`);
    });
  
    await Promise.all(sizePromises);
    var total = Math.round(cacheSize/1e3)
    return total;
  }

let installPromptEvent;
var buttonInstall = document.querySelector('#install');
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome <= 67 from automatically showing the prompt
  event.preventDefault();
  // Stash the event so it can be triggered later.
  installPromptEvent = event;
  // Update the install UI to notify the user app can be installed
  buttonInstall.disabled = false;
});

buttonInstall.addEventListener('click', () => {
    // Update the install UI to remove the install button
    buttonInstall.disabled = true;
    // Show the modal add to home screen dialog
    installPromptEvent.prompt();
    // Wait for the user to respond to the prompt
    installPromptEvent.userChoice.then((choice) => {
        ga('send', 'event','Progressive Web App', 'Add to homescreen', choice.outcome);
      // Clear the saved prompt since it can't be used again
      installPromptEvent = null;
    });
});
*/

// Setup a listener to track Add to Homescreen events.	
window.addEventListener('beforeinstallprompt', e => {	let installPromptEvent;
    e.userChoice.then(choice => {	var buttonInstall = document.querySelector('#install');
      ga('send', 'event','Progressive Web App', 'Add to homescreen', choice.outcome);
    });
});