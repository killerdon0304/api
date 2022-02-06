const list = document.getElementById('list');
        const searchBar = document.getElementById('searchbar');
        let hpCharacters = [];
        searchBar.addEventListener('keyup', (e) => {
            const searchString = e.target.value.toLowerCase();
            const filteredCharacters = hpCharacters.filter((Character)=>{
                return(
                    Character.name.toLowerCase().includes(searchString)
                );
            });
            showdeta(filteredCharacters);
        })
        console.log(searchBar.value);
        const loaddeta = async () => {
            try {
                const res = await fetch(`https://raw.githubusercontent.com/killerdon0304/api/main/jiotv/tv.json`);
                hpCharacters = await res.json();
                showdeta(hpCharacters);
            } catch (err) {
                console.error(err)
            }
        }

        const showdeta = (b) => {
             const htmlString = b
             .map((i)=>{
                 console.log(i);
                    return`
                    </div><div class="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                        <a href="${i.name}" class="card">
                        <img class="lazyload" data-src="${i.img}" style="height: 120px">
                        <div class="card-body">
                        <p class="card-text">${i.link2}
                        </p>
                        </div>
                        </a>
                        </div>
                        `;
                })
                .join('');
            list.innerHTML = htmlString;
        }
        loaddeta();
