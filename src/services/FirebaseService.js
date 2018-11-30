export const FirebaseService = (function () {
    
    return {

        getItems: async function() {
            const itemsRef = window.firebase.database().ref('items')
            itemsRef.on('value', (snapshot) => {
                let items = snapshot.val()
                let newState = []
                for (let item in items) {
                    newState.push({
                        id: item,
                        title: items[item].title,
                        user: items[item].user
                    })
                }

                console.log(items)

                return items
            })
        }
    }
  })()
