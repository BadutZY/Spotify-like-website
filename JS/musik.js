document.addEventListener('DOMContentLoaded', function() {
    // Predefined songs data with direct links to audio files
    const songs = [
        {
            id: 1,
            title: "Air Mata Perasaan Yang Tak Tersampaikan",
            artist: "JKT48",
            audioElement: document.getElementById('audio-1'),
            albumCover: "img/Pajama Drive.png",
            lyrics: `[Verse 1]
            Hujan rintik-rintik yang mulai turun
            Aku pun menutup layar kisah ini
            Bagai menurunkan layar warna perak
            Itulah cinta pertama diriku
            
            [Pre-Chorus 1]
            Ku terus menunggu di jalan yang kedua
            Ku ingin panggil namun ku tak bisa
            Saat kulihat ke bawah
            Bunga ajisai pun menangis
            
            [Chorus 1]
            Walau ku sangat ingin bertemu
            Walau ku menyukaimu
            Kau jalan berlalu di depan mataku
            Walaupun jadi begini
            Aku tetap melihatmu
            Dari tempat ini
            Walau ku sangat ingin bertemu
            Walau ku menyukaimu
            Kau bahkan tidak menoleh ke arahku
            Walaupun kupakai payung
            Pipiku pun tetap basah
            Diri ini tak berdaya
            Temo demo no namida
            
            [Verse 2]
            Di jalan yang penuh kesedihan ini
            Aku berjalan, seorang diri
            Dalam hati ini diriku tersesat
            Rasa sayang yang tak seorang pun tahu
            
            [Pre-Chorus 2]
            Bunga ajisai yang suka akan hujan
            Memejamkan mata di hari cerah
            Mendung yang jauh di sana
            Apakah kau yang memikirkannya?
            
            [Chorus 2]
            Walau sesedih apa pun juga
            Walaupun tak bisa juga
            Biarkan aku tetap menjadi gadis
            Ku tak akan melupakan
            Jejak langkah kenangan
            Bertemu denganmu
            Walau sesedih apa pun juga
            Walaupun tak bisa juga
            Suatu hari ku pasti 'kan teringat
            Walaupun harapan aku
            Tidak juga terwujudkan
            Ku 'kan terus bersinar
            Temo demo no koi yo
            
            [Interlude]
            
            [Chorus 1]
            Walau ku sangat ingin bertemu
            Walau ku menyukaimu
            Kau jalan berlalu di depan mataku
            Walaupun jadi begini
            Aku tetap melihatmu
            Dari tempat ini
            Walau ku sangat ingin bertemu
            Walau ku menyukaimu
            Kau bahkan tidak menoleh ke arahku
            Walaupun kupakai payung
            Pipiku pun tetap basah
            Diri ini tak berdaya
            Temo demo no namida`,

            lyricsTranslation: `5... 4... 3... 2... 1... go
            oy (4x)
            Aaa... yosha ikuzo

            taiga, faiya, saiba
            faiba, daiba, baiba
            jyajya
            
            (call member 1)
            (call member 1)
            (call member 1)
            
            siapa ?
            (call member 1)
            yo (3x) seno
            chouzetsu kawai (call member 1)
            
            (call member 2)
            (call member 2)
            (call member 2)
            
            siapa?
            (call member 2)

            ...

            kasen tora taiga

            (call member 2)
            (call member 2)
            (call member 2)
            
            siapa?
            (call member 2)
            yo (3x) seno
            chouzetsu kawai (call member 1)

            (call member 2)
            (call member 2)
            (call member 2)
            
            siapa?
            (call member 2)

            ...

            uispekesui
            chape ape chape
            chape ape kara kina kara ape cape
            jokyou tobi jokyou
            tora tora tora
            tora hi jinzou seni ama shindou kasen
            `
        },
        {
            id: 2,
            title: "Cara Menggunakan Hidup",
            artist: "JKT48",
            audioElement: document.getElementById('audio-2'),
            albumCover: "img/Pajama Drive.png",
            lyrics: `[Intro]
            Ingin dicintai oleh seseorang
            Ingin dicintai oleh seseorang
            Ingin dicintai oleh seseorang
            
            [Verse 1]
            Di dalam kereta
            Sambil mendengarkan iPod
            Kenapa tiba-tiba
            Ku jadi benci pada hidup ini
            
            [Pre-Chorus 1]
            Lagu pun tidak dapat menolong diriku
            Suatu tempat di hatiku menjadi berkarat
            
            [Chorus 1]
            Apabila ku disapa oleh dirimu
            Mungkin rasa sepi akan sedikit hilang
            Siapa pun tidak apa, temani aku
            Gantinya akan kuberikan
            Semua yang kau inginkan
            
            [Post-Chorus]
            Ingin dicintai oleh seseorang
            
            [Verse 2]
            Aku tetap sendiri
            Jika ku sampai di titik akhir
            Ku tak bisa temukan
            Tujuan dari untuk aku pergi
            
            [Pre-Chorus 2]
            Keluarga dan teman pun seperti udara
            Tangan yang kuulurkan membelah udara
            
            [Chorus 2]
            Apabila ku disapa oleh dirimu
            Dari situ mungkin suatu akan berubah
            Ajari cara untuk gunakan jiwa
            Selebihnya akan kubiarkan berbuat apa saja
            
            [Bridge]
            Apa yang kau mau?
            
            [Chorus 3]
            Apabila ku disapa oleh dirimu
            Mungkin rasa sepi akan sedikit hilang
            Siapa pun tidak apa, temani aku
            Gantinya akan kuberikan
            Semua yang kau inginkan
            Apabila ku disapa oleh dirimu
            Mungkinkah bisa bertemu diri sebenarnya?
            Cara untuk gunakan jiwa dengan benar
            Jika kau beritahu aku
            Ku berterima kasih
            
            [Post-Chorus]
            Ingin dicintai oleh seseorang
            Ingin dicintai oleh seseorang
            Ingin dicintai oleh seseorang
            Ingin dicintai oleh seseorang`,

            lyricsTranslation: `(call member 1)
            (call member 1)
            (call member 1)

            siapa ?
            (call member 1)
            yo (3x) seno
            chouzetsu kawai (call member 2)
            
            ...

            (call member 3)
            (call member 3)
            (call member 3)
            
            siapa ?
            (call member 3)
            yo (3x) seno
            chouzetsu kawai (call member 4)
            
            `
        },
        {
            id: 3,
            title: "Ekor Malaikat",
            artist: "JKT48",
            audioElement: document.getElementById('audio-3'),
            albumCover: "img/Pajama Drive.png",
            lyrics: `[Verse 1]
            Ku ingin hembuskan
            Gelisah di dada dengan napasku
            Balon yang bulat
            Kulepaskan dari tanganku
            
            [Pre-Chorus 1]
            Semakin tinggi rahasia
            Terbang di langit biru
            Ditiup angin entah ke mana
            
            [Chorus 1]
            Cinta
            Bagaikan ekor malaikat yang nakal
            Kabur dengan lembut tak tahu ke mana
            Matahari yang kudambakan terlalu silau
            Karenanya
            Aku berpura-pura tidak suka
            Dan aku pun menjadi bersikap dingin
            Aku memandang dari kejauhan
            Cinta tak berbalas hanya milikku
            
            [Verse 2]
            Jika kau sadar
            Akan pandanganku pada dirimu
            Jantungku pun
            Berdegup kencang dan akan meledak
            
            [Pre-Chorus 2]
            Mengapa perasaanku
            Jadi berat begini?
            Ku ingin bertanya pada awan putih
            
            [Chorus 2]
            Cinta
            Bagaikan ekor malaikat yang plin-plan
            Gerak ke sana sini susah kutangkap
            Tak akan bisa atasi pada pengalaman pertama
            Suatu hari
            Arah angin akan berubah
            Hingga kebetulan kau lihat ke sini
            Ku 'kan menunggu di tempat ini
            Hingga keajaiban munculnya pelangi
            
            [Interlude]
            
            [Chorus 1]
            Cinta
            Bagaikan ekor malaikat yang nakal
            Kabur dengan lembut tak tahu ke mana
            Matahari yang kudambakan terlalu silau
            Karenanya
            Aku berpura-pura tidak suka
            Dan aku pun menjadi bersikap dingin
            Aku memandang dari kejauhan
            Cinta tak berbalas hanya milikku`,

            lyricsTranslation: `5... 4... 3... 2... 1... go
            oy (4x)
            Aaa... yosha ikuzo

            taiga, faiya, saiba
            faiba, daiba, baiba
            jyajya
            
            (call member 1)
            (call member 1)
            (call member 1)
            
            siapa?
            (call member 1)
            yo (3x) seno
            chouzetsu kawai (call member 1)

            (call member 2)
            (call member 2)
            (call member 2)

            siapa?
            (call member 2)

            ...

            uw uw
            uw uw
            wuhu... wuhu...

            uw uw
            uw uw
            wuhu... wuhu...

            ...

            oy (4x)
            Aaa... yosha ikuzo

            tora, hi, jinzou
            seni, ama 
            shindo, kasen, tobi, jokyo

            (call member 2)
            (call member 2)
            (call member 2)
            
            siapa?
            (call member 2)

            yo (3x) seno
            chouzetsu kawai (call member 3)

            (call member 1)
            (call member 1)
            (call member 1)

            siapa
            (call member 1)

            ...

            uw uw
            uw uw
            wuhu... wuhu...

            uw uw
            uw uw
            wuhu... wuhu...

            ...

            (call member 1) kawai
            chu kawai

            (call member 2) kawai
            chu kawai

            (call member 3) kawai
            chu kawai

            (call member 1) kawai
            chu kawai

            uw uw
            uw uw
            wuhu... wuhu...

            uw uw
            uw uw
            wuhu... wuhu...`
            
            
        },
        {
            id: 4,
            title: "Joan Of Arc Di Dalam Cermin",
            artist: "JKT48",
            audioElement: document.getElementById('audio-4'),
            albumCover: "img/Pajama Drive.png",
            lyrics: `[Verse 1]
            Seseorang memanggil namaku dari dunia ini
            Dengan suara yang samar, saatnya ini juga
            Selalu percaya dan menunggu waktu tibanya takdir
            Ingin rasanya terlahir kembali di depan cermin
            
            [Pre-Chorus 1]
            Langit tanpa tempat 'tuk lari
            Kota di mana cinta terkubur
            Terbiasa di kesendirian
            
            [Chorus 1]
            Hai para gadis
            Telah tiba hari bagi kita untuk bangkit
            ’Pabila ada mimpi kaki lemah sekali pun
            Dapat melangkah
            Pasti terpancar di
            Bola mata yang bulat dan manis tanpa ternoda
            Penuh dengan harapan bermandikan cahaya
            Jalan esok hari
            
            [Verse 2]
            Aku tidak mengerti sebenarnya untuk apa ku hidup
            Masa lalu diriku yang selalu terkekang erat
            Pada suatu saat 'kan datang menolong pendekar berkuda putih
            Diriku yang telah memutuskan rantai hati
            
            [Pre-Chorus 2]
            Daripada aku meminta
            Keberanian yang didapat
            Kebebasan 'kan jadi kekuatan
            
            [Chorus 2]
            Hai para gadis
            Siapa pun bisa menjadi seorang Joan Of Arc
            Langit biru luas yang telah terlupakan
            Ingatlah!
            Punggung manusia
            Memiliki sayap yang tak terlihat pasti ’kan sadar
            Menghadap ke depan memohon dengan tulus
            Dan terbang ke langit
            
            [Interlude]
            
            [Chorus 1]
            Hai para gadis
            Telah tiba hari bagi kita untuk bangkit
            'Pabila ada mimpi kaki lemah sekali pun
            Dapat melangkah
            Pasti terpancar di
            Bola mata yang bulat dan manis tanpa ternoda
            Penuh dengan harapan bermandikan cahaya
            Jalan esok hari`,

            lyricsTranslation: `hai seno
            Myouhonouske kasen tobi jokyou
            jyajya faibou waipa
            
            urya oi...(4x)
            Aaa... yosha ikuzo

            taiga, faiya, saiba
            faiba, daiba, baiba
            jyajya

            (call member 1)
            (call member 1)
            (call member 1)

            siapa?
            (call member 1)
            yo (3x) seno
            chouzetsu kawai (call member 2)

            (call member 1)
            (call member 1)
            (call member 1)

            siapa?
            (call member 1)
            yo (3x) seno
            oi oi... oi(3x)

            ...

            Tora (13x)
            hi... jinzou, seni 
            ama, shindou 
            kasen, tobi, jokyou
            
            ...
            
            hai seno
            takamaru yo (2x)
            takamaru, hikumaru, bisumaruku

            shinjimaru, arushindo, kazudansu
            knee high, oh hai, kan chuhai
            oolonghai, nachuraru high, i can fly

            ...

            nojou, mai
            umiu, tiao
            jokyou tobi kasen shindou ama seni jinzou hi

            tora, hi, tora, hi
            tora tora tora
            tora jinsei ama shindou

            ama shin ama shin ama shindou
            ama shin ama shin jinzou hi
            tora hi jinzou seni

            ama, shindou, kasen
            tobi, jokyou, tiao
            umiu, mai, nojou
            `
        },
        {
            id: 5,
            title: "Pelaut Yang Melihat Mimpi Di Tengah Badai",
            artist: "JKT48",
            audioElement: document.getElementById('audio-5'),
            albumCover: "img/Pajama Drive.png",
            lyrics: `[Verse 1]
            Ada di atas tebing
            Di pulau yang terpencil
            Yang tidak seorang pun tahu
            Diselimuti awan
            Anginpun berteriak
            Hujan memukul pipi
            
            [Pre-Chorus 1]
            Di kejauhan sana
            Ada tempat tak ada di peta
            Ujung bumi bagaimana pun
            Arungi laut tetapkan tujuan
            
            [Chorus 1]
            Ubahlah badai yang dahsyat
            Menjadi kekuatan
            Sekarang! Keluarkanlah kapal!
            Berlayar!
            Ubahlah kegembiraan
            Menjadi keberanian
            Kembangkan layar mimpi
            Wahai pelaut
            Believe!
            
            [Verse 2]
            Ombak bergulung
            Meleburkan mulutnya
            Menunggu datangnya kapal
            Petir yang dekat
            Poseidon yang marah
            Cakrawala yang memudar
            
            [Pre-Chorus 2]
            Di dunia yang luas
            Ada takdir belum terjangkau
            Yang menghalangi jalan
            Hanya diri yang sudah menyerah
            
            [Chorus 2]
            Angkatlah jangkar
            Dari masa saat kita lemah
            Ayolah! Saatnya 'tuk berlayar!
            Sekarang!
            Janganlah berpikir bahwa
            Kamu akan tenggelam
            Banggalah dengan mimpi
            Wahai pelaut
            Sailing!
            
            [Interlude]
            
            [Chorus 1]
            Ubahlah badai yang dahsyat
            Menjadi kekuatan
            Sekarang! Keluarkanlah kapal!
            Berlayar!
            Ubahlah kegembiraan
            Menjadi keberanian
            Kembangkan layar mimpi
            Wahai pelaut
            Believe!`,

            lyricsTranslation: `Verse 1:
            I stand on the stage that I've always dreamed of
            Amid cheers, applause, and enthusiasm
            With strict training, I surpassed my own limits
            Welcome this day as the curtain of opportunity opens`
        },
        {
            id: 6,
            title: "Rugi Sudah Dicium",
            artist: "JKT48",
            audioElement: document.getElementById('audio-6'),
            albumCover: "img/Pajama Drive.png",
            lyrics: `[Verse 1]
            Gosip beredar di seluruh sekolah
            Tentang murid yang teladan itu
            Anak SMA lain setahun di bawah
            Itu katanya pacarnya yang lucu
            
            [Pre-Chorus 1]
            Saling memandang di bawah langit yang berbintang
            Hari di mana aku dipeluk
            
            [Chorus 1]
            Rugi sudah dicium sama kamu
            Diriku yang benar-benar percaya
            Memandang dengan ramah dan bisikkan kata cinta
            Rugi sudah dicium sama kamu
            Semua hanyalah dusta belaka
            Kembalikan kembalikanlah ciumku
            
            [Verse 2]
            Sambil tersenyum dia bilang padaku
            Itu hanyalah gosip yang tidak berdasar
            Seorang adik kelas yang dahulu
            Yang selalu kuajari pelajaran
            
            [Pre-Chorus 2]
            Alasannya sedikit di luar dugaan
            Ku sadar ia seorang playboy
            
            [Chorus 2]
            Tak apa kalau hanya sekali cium
            Anggap saja hanya digigit nyamuk
            Tak akan sampai menangis karena aku tidak lemah
            Tak apa kalau hanya sekali cium
            Cinta itu hanyalah salah paham
            Enyahlah kau dari dalam ingatanku
            
            [Interlude]
            
            [Chorus 1]
            Rugi sudah dicium sama kamu
            Diriku yang benar-benar percaya
            Memandang dengan ramah dan bisikkan kata cinta
            Rugi sudah dicium sama kamu
            Semua hanyalah dusta belaka
            Kembalikan kembalikanlah ciumku
            
            [Chorus 2]
            Tak apa kalau hanya sekali cium
            Anggap saja hanya digigit nyamuk
            Tak akan sampai menangis karena aku tidak lemah
            Tak apa kalau hanya sekali cium
            Cinta itu hanyalah salah paham
            Enyahlah kau dari dalam ingatanku`,

            lyricsTranslation: `Verse 1:
            I stand on the stage that I've always dreamed of
            Amid cheers, applause, and enthusiasm
            With strict training, I surpassed my own limits
            Welcome this day as the curtain of opportunity opens`
        },
        {
            id: 7,
            title: "Two Years Later",
            artist: "JKT48",
            audioElement: document.getElementById('audio-7'),
            albumCover: "img/Pajama Drive.png",
            lyrics: `[Verse 1]
            Kudorong pintu yang susah dibuka
            Ke dalam tempat yang tak berpenghuni
            Besok (Di sini) Ayo (Bertemu)
            E-mail (Sebaris) Yang datang (Mendadak)
            Kaca mozaik itu sangat nostaljik
            
            [Verse 2]
            "Sebelum diriku menjadi dewasa
            Tak bisa cintaimu," Saat dimanjakan
            Cinta (Lama di) Lubuk (Hatiku)
            Sedih (Nan manis) Tinggalkan (Duri)
            Penanda dari kenangan
            
            [Pre-Chorus 1]
            Kenapa? Dua tahun berlalu
            Kenapa? Membuatku berbalik?
            Beritahu!
            
            [Chorus 1]
            Maafkanlah, Tuhan
            Ampunilah diriku ini
            Yang tidak percaya 'kan cinta
            Aku adalah wanita yang jahat
            Sesatkan orang yang ditemui
            Selanjutnya dengan kesedihan
            Suatu yang penting bagiku
            Telah menghilang
            
            [Verse 3]
            Baiknya bertemu dengan muka apa?
            Karena ku bukan aku yang waktu dulu
            Ada (Tujuan) Tak bisa (Pergi)
            Mungkin ku (Memakai) Bohong yang (Pandai)
            Ku bingung menulis e-mail balasan
            
            [Verse 4]
            Di sisi ujung bangku panjang itu
            Kuhela napasku hilangkan semua perandaian
            Sampai (Sekarang) Ku ingin (Cintai)
            Dirimu (Selalu) Ego tak (Terucap)
            Waktu itu sangat kejam
            
            [Pre-Chorus 2]
            Hai, kenapa manusia
            Hai, sadari kesalahan
            Yang dibuat?
            
            [Chorus 2]
            Maafkanlah, Tuhan
            Diriku yang terlalu bodoh
            Tak bisa menepati janji
            Kau adalah orang yang baik dahulu
            Tapi pada jari manisku
            Ada seseorang yang baru
            Sudah tak bisa kembali
            Ke masa itu
            
            [Chorus 1]
            Maafkanlah, Tuhan
            Ampunilah diriku ini
            Yang tidak percaya 'kan cinta
            Aku adalah wanita yang jahat
            Sesatkan orang yang ditemui
            Selanjutnya dengan kesedihan
            Suatu yang penting bagiku
            Telah menghilang`,

            lyricsTranslation: `Verse 1:
            I stand on the stage that I've always dreamed of
            Amid cheers, applause, and enthusiasm
            With strict training, I surpassed my own limits
            Welcome this day as the curtain of opportunity opens`
        }
    ];

    // Current state
    let currentSongIndex = 0;
    let isPlaying = false;
    let isShuffled = false;
    let isRepeating = false;

    // DOM elements
    const playPauseBtn = document.getElementById('play-pause');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const shuffleBtn = document.getElementById('shuffle');
    const repeatBtn = document.getElementById('repeat');
    const progressBar = document.getElementById('progress-bar');
    const progressFill = document.getElementById('progress-fill');
    const currentTimeDisplay = document.getElementById('current-time');
    const totalTimeDisplay = document.getElementById('total-time');
    const currentSongTitle = document.getElementById('current-song-title');
    const currentSongArtist = document.getElementById('current-song-artist');
    const currentAlbumImg = document.getElementById('current-album-img');
    const playerSongName = document.getElementById('player-song-name');
    const playerArtistName = document.getElementById('player-artist-name');
    const playerAlbumImg = document.getElementById('player-album-img');
    const lyricsContainer = document.getElementById('lyrics');
    const lyricsTranslationContainer = document.getElementById('lyrics-translation');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const playlistContainer = document.getElementById('playlist-container');

    // Initialize UI
    updatePlayerInfo();
    generatePlaylist();

    // Event listeners
    playPauseBtn.addEventListener('click', togglePlayPause);
    nextBtn.addEventListener('click', () => {
        playNextSong();
        // Auto-play when clicking next
        if (songs[currentSongIndex].audioElement) {
            songs[currentSongIndex].audioElement.play();
            isPlaying = true;
            playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }
    });
    prevBtn.addEventListener('click', () => {
        playPrevSong();
        // Auto-play when clicking previous
        if (songs[currentSongIndex].audioElement) {
            songs[currentSongIndex].audioElement.play();
            isPlaying = true;
            playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }
    });
    progressBar.addEventListener('click', seekTo);
    shuffleBtn.addEventListener('click', toggleShuffle);
    repeatBtn.addEventListener('click', toggleRepeat);
    
    // Add tabs event listeners
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding pane
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Add timeupdate listeners to all audio elements
    songs.forEach(song => {
        song.audioElement.addEventListener('timeupdate', updateProgress);
        song.audioElement.addEventListener('ended', handleSongEnd);
    });

    // Generate the playlist
    function generatePlaylist() {
        playlistContainer.innerHTML = '';
        
        songs.forEach((song, index) => {
            const playlistItem = document.createElement('div');
            playlistItem.className = `playlist-item ${index === currentSongIndex ? 'active' : ''}`;
            playlistItem.dataset.index = index;
            
            playlistItem.innerHTML = `
                <div class="playlist-icon">
                    <img src="${song.albumCover}" alt="${song.title}">
                </div>
                <div class="playlist-details">
                    <div class="playlist-title">${song.title}</div>
                    <div class="playlist-artist">${song.artist}</div>
                </div>
            `;
            
            playlistItem.addEventListener('click', function() {
                const selectedIndex = parseInt(this.dataset.index);
                if (selectedIndex !== currentSongIndex) {
                    // Stop current song
                    songs[currentSongIndex].audioElement.pause();
                    songs[currentSongIndex].audioElement.currentTime = 0;
                    
                    // Update current song index
                    currentSongIndex = selectedIndex;
                    
                    // Load and play the selected song
                    loadSong();
                    
                    // Autoplay when clicking playlist item
                    songs[currentSongIndex].audioElement.play();
                    isPlaying = true;
                    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
                } else {
                    // If clicking on the current song, just toggle play/pause
                    togglePlayPause();
                }
            });
            
            playlistContainer.appendChild(playlistItem);
        });
    }

    // Update active song in the playlist
    function updateActiveInPlaylist() {
        const playlistItems = document.querySelectorAll('.playlist-item');
        playlistItems.forEach((item, index) => {
            if (index === currentSongIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Functions
    function togglePlayPause() {
        const currentSong = songs[currentSongIndex];
        
        if (isPlaying) {
            currentSong.audioElement.pause();
            playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        } else {
            // Stop any other playing audio
            songs.forEach(song => {
                if (song.id !== currentSong.id) {
                    song.audioElement.pause();
                    song.audioElement.currentTime = 0;
                }
            });
            
            currentSong.audioElement.play();
            playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }
        
        isPlaying = !isPlaying;
    }

    function playNextSong() {
        // Stop current song
        songs[currentSongIndex].audioElement.pause();
        songs[currentSongIndex].audioElement.currentTime = 0;
        
        if (isShuffled) {
            // Get random index different from current
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * songs.length);
            } while (newIndex === currentSongIndex && songs.length > 1);
            currentSongIndex = newIndex;
        } else {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
        }
        
        loadSong();
        
        // Auto-play when changing to next song
        if (isPlaying) {
            songs[currentSongIndex].audioElement.play();
            playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }
    }

    function playPrevSong() {
        // Stop current song
        songs[currentSongIndex].audioElement.pause();
        songs[currentSongIndex].audioElement.currentTime = 0;
        
        if (isShuffled) {
            // Get random index different from current
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * songs.length);
            } while (newIndex === currentSongIndex && songs.length > 1);
            currentSongIndex = newIndex;
        } else {
            currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        }
        
        loadSong();
        
        // Auto-play when changing to previous song
        if (isPlaying) {
            songs[currentSongIndex].audioElement.play();
            playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }
    }

    function loadSong() {
        // Update song info in UI
        updatePlayerInfo();
        updateActiveInPlaylist();
        
        // Reset progress bar
        progressFill.style.width = '0%';
        currentTimeDisplay.textContent = '0:00';
    }

    function updatePlayerInfo() {
        const song = songs[currentSongIndex];
        
        currentSongTitle.textContent = song.title;
        currentSongArtist.textContent = song.artist;
        currentAlbumImg.src = song.albumCover;
        
        playerSongName.textContent = song.title;
        playerArtistName.textContent = song.artist;
        playerAlbumImg.src = song.albumCover;
        
        // Update lyrics
        lyricsContainer.innerHTML = `<p>${song.lyrics.replace(/\n/g, '<br>')}</p>`;
        
        // Update lyrics translation if available
        if (song.lyricsTranslation) {
            lyricsTranslationContainer.innerHTML = `<p>${song.lyricsTranslation.replace(/\n/g, '<br>')}</p>`;
        } else {
            lyricsTranslationContainer.innerHTML = '<p>Translation not available for this song.</p>';
        }
        
        // Update total time display
        if (song.audioElement.duration) {
            totalTimeDisplay.textContent = formatTime(song.audioElement.duration);
        } else {
            song.audioElement.addEventListener('loadedmetadata', function() {
                totalTimeDisplay.textContent = formatTime(song.audioElement.duration);
            });
        }
    }

    function updateProgress() {
        const currentSong = songs[currentSongIndex];
        
        // Make sure we're only updating for the active song
        if (this === currentSong.audioElement) {
            const duration = currentSong.audioElement.duration;
            const currentTime = currentSong.audioElement.currentTime;
            
            if (duration) {
                // Update progress bar
                const progressPercent = (currentTime / duration) * 100;
                progressFill.style.width = `${progressPercent}%`;
                
                // Update time displays
                currentTimeDisplay.textContent = formatTime(currentTime);
                totalTimeDisplay.textContent = formatTime(duration);
            }
        }
    }

    function handleSongEnd() {
        // Check if this is the current song that ended
        if (this === songs[currentSongIndex].audioElement) {
            if (isRepeating) {
                // Restart the same song
                this.currentTime = 0;
                this.play();
            } else {
                // Play next song with autoplay
                playNextSong();
                songs[currentSongIndex].audioElement.play();
                isPlaying = true;
                playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            }
        }
    }

    function seekTo(e) {
        const currentSong = songs[currentSongIndex];
        const progressBarWidth = progressBar.clientWidth;
        const clickX = e.offsetX;
        const duration = currentSong.audioElement.duration;
        
        currentSong.audioElement.currentTime = (clickX / progressBarWidth) * duration;
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
    }

    function toggleShuffle() {
        isShuffled = !isShuffled;
        if (isShuffled) {
            shuffleBtn.style.color = 'var(--primary)';
        } else {
            shuffleBtn.style.color = 'var(--light-grey)';
        }
    }

    function toggleRepeat() {
        isRepeating = !isRepeating;
        if (isRepeating) {
            repeatBtn.style.color = 'var(--primary)';
        } else {
            repeatBtn.style.color = 'var(--light-grey)';
        }
    }

    // Volume control
    const volumeBar = document.querySelector('.volume-bar');
    const volumeFill = document.querySelector('.volume-fill');
    const volumeBtn = document.querySelector('.volume-btn');
    let previousVolume = 0.7; // Store the previous volume level
    let isMuted = false;

    // Initialize volume for all audio elements
    songs.forEach(song => {
        song.audioElement.volume = previousVolume;
    });
    volumeFill.style.width = `${previousVolume * 100}%`;

    volumeBtn.addEventListener('click', function() {
        isMuted = !isMuted;
        
        if (isMuted) {
            // Store current volume before muting
            previousVolume = songs[0].audioElement.volume;
            // Set volume to 0 (mute)
            songs.forEach(song => song.audioElement.volume = 0);
            volumeFill.style.width = '0%';
            volumeBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        } else {
            // Restore previous volume
            songs.forEach(song => song.audioElement.volume = previousVolume);
            volumeFill.style.width = `${previousVolume * 100}%`;
            volumeBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        }
    });

    volumeBar.addEventListener('click', function(e) {
        const volumeBarWidth = volumeBar.clientWidth;
        const clickX = e.offsetX;
        const newVolume = clickX / volumeBarWidth;
        
        // Update volume for all audio elements
        songs.forEach(song => song.audioElement.volume = newVolume);
        
        // Update UI
        volumeFill.style.width = `${newVolume * 100}%`;
        previousVolume = newVolume;
        
        // Update icon if needed
        if (newVolume === 0) {
            volumeBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
            isMuted = true;
        } else {
            volumeBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
            isMuted = false;
        }
    });

    // Add keyboard shortcuts for playback control
    document.addEventListener('keydown', function(e) {
        // Space bar - toggle play/pause
        if (e.code === 'Space' && !e.target.matches('input, textarea')) {
            e.preventDefault(); // Prevent page scrolling
            togglePlayPause();
        }
        
        // Right arrow - next song with autoplay
        if (e.code === 'ArrowRight' && !e.target.matches('input, textarea')) {
            playNextSong();
            songs[currentSongIndex].audioElement.play();
            isPlaying = true;
            playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }
        
        // Left arrow - previous song with autoplay
        if (e.code === 'ArrowLeft' && !e.target.matches('input, textarea')) {
            playPrevSong();
            songs[currentSongIndex].audioElement.play();
            isPlaying = true;
            playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }
        
        // M key - toggle mute
        if (e.code === 'KeyM' && !e.target.matches('input, textarea')) {
            isMuted = !isMuted;
            
            if (isMuted) {
                previousVolume = songs[currentSongIndex].audioElement.volume;
                songs.forEach(song => song.audioElement.volume = 0);
                volumeFill.style.width = '0%';
                volumeBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
            } else {
                songs.forEach(song => song.audioElement.volume = previousVolume);
                volumeFill.style.width = `${previousVolume * 100}%`;
                volumeBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
            }
        }
    });

    // Initialize the player with the first song
    loadSong();
});

// Mobile menu functionality
const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('active');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    if (sidebar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Close menu when clicking outside
overlay.addEventListener('click', function() {
    hamburgerMenu.classList.remove('active');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close menu when clicking a playlist item on mobile
if (window.innerWidth <= 768) {
    const playlistItems = document.querySelectorAll('.playlist-item');
    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburgerMenu.classList.remove('active');
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
}

// Check viewport size on resize and adjust accordingly
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        hamburgerMenu.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

 // Load user profile data and set up logout functionality
 document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in by looking for data in sessionStorage
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (currentUser) {
        // User is logged in, update profile elements
        const username = currentUser.username;
        const profilePic = currentUser.profilePic || 'img/NoPic.jpg'; // Use default if no profile pic
        
        // Update username in both desktop and mobile views
        document.getElementById('username').textContent = username;
        document.getElementById('mobile-username').textContent = username;
        
        // Update profile picture in both desktop and mobile views
        document.getElementById('user-avatar').src = profilePic;
        document.getElementById('mobile-user-avatar').src = profilePic;
    } else {
        // If no user is logged in, redirect to login page
        window.location.href = 'login.html';
    }
    
    // Toggle user dropdown menus
    const userMenu = document.querySelector('.user-menu');
    const userDropdown = document.querySelector('.user-dropdown');
    const userAja = document.querySelector('.user-aja');
    const mobileUserDropdown = document.querySelector('.mobile-user-dropdown');
    
    // Desktop user menu click event - updated to toggle only on click
    userMenu.addEventListener('click', function(e) {
        userDropdown.classList.toggle('active');
        e.stopPropagation();
    });
    
    // Mobile user menu click event - updated to toggle only on click
    userAja.addEventListener('click', function(e) {
        mobileUserDropdown.classList.toggle('active');
        e.stopPropagation();
    });
    
    // Close dropdowns when clicking elsewhere
    document.addEventListener('click', function() {
        userDropdown.classList.remove('active');
        mobileUserDropdown.classList.remove('active');
    });
    
    // Logout functionality
    const logoutButtons = document.querySelectorAll('.logout-btn');
    
    logoutButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Clear user session data
            sessionStorage.removeItem('currentUser');
            
            // Redirect to login page
            window.location.href = 'login.html';
        });
    });
});

// Get necessary modal elements
const accountSettingsModal = document.getElementById('accountSettingsModal');
const cropperModal = document.getElementById('cropperModal');
const closeSettingsModalBtn = document.getElementById('closeSettingsModal');
const closeCropperModalBtn = document.getElementById('closeCropperModal');
const saveSettingsBtn = document.getElementById('saveSettings');
const profilePhotoInput = document.getElementById('profilePhotoUpload');
const profilePhotoPreview = document.getElementById('profilePhotoPreview');
const usernameInput = document.getElementById('usernameInput');
const cropperImage = document.getElementById('cropperImage');
const cancelCropBtn = document.getElementById('cancelCrop');
const applyCropBtn = document.getElementById('applyCrop');

// Settings button event listeners (both desktop and mobile)
const settingsButtons = document.querySelectorAll('.settings-btn');
settingsButtons.forEach(btn => {
    btn.addEventListener('click', openAccountSettings);
});

// Close modals event listeners
closeSettingsModalBtn.addEventListener('click', closeAccountSettings);
closeCropperModalBtn.addEventListener('click', closeCropperModal);
cancelCropBtn.addEventListener('click', closeCropperModal);

// Save settings event listener
saveSettingsBtn.addEventListener('click', saveAccountSettings);

// Profile photo upload event listener
profilePhotoInput.addEventListener('change', handleProfilePhotoUpload);

// Apply crop event listener
applyCropBtn.addEventListener('click', applyCrop);

// Current cropper instance
let cropper;
// Original image data for comparison
let originalImageData;
// Temporary cropped image URL
let croppedImageUrl;

// Load current user data when opening settings
function openAccountSettings() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (currentUser) {
        // Fill in current values
        usernameInput.value = currentUser.username;
        profilePhotoPreview.src = currentUser.profilePic || 'img/NoPic.jpg';
        
        // Store original image data for comparison
        originalImageData = currentUser.profilePic || 'img/NoPic.jpg';
    }
    
    // Display the modal
    accountSettingsModal.style.display = 'flex';
    
    // Close any dropdown menus that might be open
    document.querySelector('.user-dropdown').classList.remove('active');
    document.querySelector('.mobile-user-dropdown').classList.remove('active');
}

// Close settings modal
function closeAccountSettings() {
    accountSettingsModal.style.display = 'none';
}

// Close cropper modal
function closeCropperModal() {
    cropperModal.style.display = 'none';
    
    // Destroy cropper instance if exists
    if (cropper) {
        cropper.destroy();
        cropper = null;
    }
}

// Handle profile photo file selection
function handleProfilePhotoUpload(e) {
    const file = e.target.files[0];
    
    if (file) {
        // Validate file is an image
        if (!file.type.match('image.*')) {
          Swal.fire({
              title: "Please select an image file",
              icon: "info",
            });
        }
        
        // Create a FileReader to read the image
        const reader = new FileReader();
        
        reader.onload = function(event) {
            // Set the image source in the cropper modal
            cropperImage.src = event.target.result;
            
            // Display the cropper modal
            cropperModal.style.display = 'flex';
            
            // Initialize cropper after a short delay to ensure image is loaded
            setTimeout(() => {
                if (cropper) {
                    cropper.destroy();
                }
                
                // Initialize cropper with circular aspect ratio
                cropper = new Cropper(cropperImage, {
                    aspectRatio: 1,
                    viewMode: 1,
                    guides: true,
                    autoCropArea: 0.8,
                    cropBoxResizable: true
                });
            }, 100);
        };
        
        // Read the file as a data URL
        reader.readAsDataURL(file);
    }
}

// Apply the cropping
function applyCrop() {
    if (!cropper) return;
    
    // Get the cropped canvas
    const canvas = cropper.getCroppedCanvas({
        width: 200,
        height: 200
    });
    
    if (canvas) {
        // Convert canvas to data URL
        croppedImageUrl = canvas.toDataURL('image/jpeg');
        
        // Update preview with cropped image
        profilePhotoPreview.src = croppedImageUrl;
        
        // Close the cropper modal
        closeCropperModal();
    }
}

// saveAccountSettings function
function saveAccountSettings() {
  // Get current user data from sessionStorage
  let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  
  if (currentUser) {
      // Update username if changed and not empty
      const newUsername = usernameInput.value.trim();
      if (newUsername !== '' && newUsername !== currentUser.username) {
          currentUser.username = newUsername;
      }
      
      // Update profile picture if changed
      if (croppedImageUrl && croppedImageUrl !== originalImageData) {
          currentUser.profilePic = croppedImageUrl;
      }
      
      // Save updated user data to sessionStorage
      sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
      
      // Now also update the user data in localStorage for admin panel
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const originalEmail = currentUser.email; // Save original email for finding the user
      
      // Find and update the user in the localStorage array
      const updatedUsers = users.map(user => {
          if (user.email === originalEmail) {
              // Update username and profile picture while preserving other user data
              return {
                  ...user,
                  username: currentUser.username,
                  profilePic: currentUser.profilePic
              };
          }
          return user;
      });
      
      // Save updated users array back to localStorage
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      
      // Update UI elements with new data
      document.getElementById('username').textContent = currentUser.username;
      document.getElementById('mobile-username').textContent = currentUser.username;
      document.getElementById('user-avatar').src = currentUser.profilePic;
      document.getElementById('mobile-user-avatar').src = currentUser.profilePic;
      
      // Reset cropped image URL
      croppedImageUrl = null;
      
      // Show success message
      Swal.fire({
          title: "Profile updated successfully!",
          icon: "success",
        });
      
      // Close the settings modal
      closeAccountSettings();
  }
}

// Add Cropper.js library to the document
function loadCropperScript() {
    // Load Cropper.js CSS
    const cropperCss = document.createElement('link');
    cropperCss.rel = 'stylesheet';
    cropperCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.12/cropper.min.css';
    document.head.appendChild(cropperCss);
    
    // Load Cropper.js script
    const cropperScript = document.createElement('script');
    cropperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.12/cropper.min.js';
    document.body.appendChild(cropperScript);
}

// Call this function when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadCropperScript();
});

// Add this to your musik.js file within the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in and is admin
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser')) || {};
    const isAdmin = currentUser.isAdmin || false;
    
    console.log("User login status:", currentUser, "Is admin:", isAdmin); // Debug info
    
    // Update username display
    const usernameElement = document.getElementById('username');
    const mobileUsernameElement = document.getElementById('mobile-username');
    
    if (currentUser.username) {
        if (usernameElement) usernameElement.textContent = currentUser.username;
        if (mobileUsernameElement) mobileUsernameElement.textContent = currentUser.username;
    }
    
    // Show admin badge if user is admin
    const adminBadge = document.getElementById('admin-badge');
    const mobileAdminBadge = document.getElementById('mobile-admin-badge');
    
    if (isAdmin) {
        if (adminBadge) adminBadge.style.display = 'block';
        if (mobileAdminBadge) mobileAdminBadge.style.display = 'block';
    }
    
    // Show admin panel link if user is admin
    const adminPanelLink = document.getElementById('admin-panel-link');
    const mobileAdminPanelLink = document.getElementById('mobile-admin-panel-link');
    
    if (isAdmin) {
        if (adminPanelLink) {
            adminPanelLink.style.display = 'block';
            adminPanelLink.addEventListener('click', function() {
                window.location.href = 'admin.html';
            });
        }
        
        if (mobileAdminPanelLink) {
            mobileAdminPanelLink.style.display = 'block';
            mobileAdminPanelLink.addEventListener('click', function() {
                window.location.href = 'admin.html';
            });
        }
    }
});