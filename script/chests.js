function generalCanGetChest(chestlist) {
    var canGet = 0;
    var unopened = 0;
    for (var key in chestlist) {
        if (chestlist.hasOwnProperty(key)) {
            if (!chestlist[key].isOpened) {
                unopened++;
            }

            if (!chestlist[key].isOpened && chestlist[key].isAvailable()) {
                canGet++;
            }
        }
    }

    if (unopened == 0) {
        return "opened";
    }
    if (canGet == unopened) {
        return "available";
    }
    if (canGet == 0) {
        return "unavailable";
    }
    return "possible";
}

function lens(loc){
    switch(lensLogic){
        //Lens Logic set to Everywhere
        case ('All'):
            return items.Lens && items.Magic;
        //Lens Logic set to Wasteland and Chest
        case 'Semi':
            if(loc == 'Semi' || loc == 'Low'){
                return (items.Lens && items.Magic)
            } else {
                return true
            }
        case 'Low':
            if(loc == 'Low'){
                return (items.Lens && items.Magic)
            }else {
                return true
            }
        default :
            throw loc
    }
}

function hasBoom(){
    if(chuInLogic == true){
        return (items.Bombs || items.Blast || items.Goron && items.PowderKeg)
    }else {
        return (items.Bombs || items.Blast || items.Goron && items.PowderKeg)
    }
}


function canPlay(song){
    return (song && items.Ocarina);
}

function canAccessSpiritAdult() {
    return (((((canPlay(items.EponasSong) && items.HoverBoots) || items.Hookshot >= 2) && lens('Semi')) || canPlay(items.RequiemofSpirit)) && items.Glove >= 2);
}
function canAccessFire() {
    return (items.GoronTunic && (canPlay(items.BoleroofFire) || ((items.HoverBoots || items.Hookshot) && (items.Bow || items.Glove || hasBoom())) || (items.HoverBoots && items.Hammer)));
}
function canAccessDeepFire() {
    return (items.Glove && ( hasBoom() || items.Bow || items.Hookshot));
}
function canAccessHoverShadow() {
    return (canPlay(items.NocturneofShadow) && items.Dins && lens('All') && items.HoverBoots);
}

// define dungeon chests
var dungeons = [
     {
        name: "South Clock Town",
        x: "55.5%",
        y: "53.5%",
        chestlist: {
            'Clock Tower Entrance': { isAvailable: function () {
                return true; }, },
            'Clock Town Scrub Trade': { isAvailable: function () {
                return items.Moonstear; }, },
            'Postbox': { isAvailable: function () {
                return items.Postman; }, },
            'Final Day Chest': { isAvailable: function () {
                return items.Deku && items.Moonstear || items.Hookshot; }, },
            'Straw Roof Chest': { isAvailable: function () {
                return items.Sword || items.Hookshot || items.stick || items.GFsword; }, },
            'Laundry Pool: Guru Guru': { isAvailable: function () {
                return true; }, },
            'Laundry Pool: Kafei': { isAvailable: function () {
                return items.Letter; }, },
            'Laundry Pool: Curiosity Shop Man #1': { isAvailable: function () {
                return items.Letter; }, },
            'Laundry Pool: Curiosity Shop Man #2': { isAvailable: function () {
                return items.Letter; }, },        
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "North Clock Town",
        x: "55.5%",
        y: "48.5%",
        chestlist: {

            'Bombers Hide and Seek': { isAvailable: function () {
                return (items.Bow || items.Hookshot || items.Zora) || items.Deku && items.Magic ; }, },
            'Clock Town Map Purchase': { isAvailable: function () {
                return items.Bow || items.Hookshot || items.Zora || items.Sword || items.GFsword || items.FD || items.Deku && items.Magic; }, },
            'Deku Playground Any Day': { isAvailable: function () {
                return items.Deku; }, },
            'Deku Playground Three Days': { isAvailable: function () {
                return items.Deku; }, },    
            'Keaton Quiz': { isAvailable: function () {
                return items.Keaton; }, },
            'North Clock Town Tree': { isAvailable: function () {
                return true; }, },
            'Old Lady (Blastmask)': { isAvailable: function () {
                return items.Zora || items.Sword || items.GFsword || items.FD || items.Goron; }, },
            'Town Great Fairy': { isAvailable: function () {
                return true; }, },
            'Town Great Fairy Non-Human': { isAvailable: function () {
                return items.Deku || items.Zora || items.Goron; }, },            
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "West Clock Town",
        x: "52.8%",
        y: "51.0%",
        chestlist: {
            'All-Night Mask Purchase': { isAvailable: function () {
                return items.Wallet >= 2; }, },
            'Bank Reward #1': { isAvailable: function () {
                return true; }, },
            'Bank Reward #2': { isAvailable: function () {
                return true; }, },
            'Bank Reward #3': { isAvailable: function () {
                return true; }, },
            'Bomb Shop Purchases': { isAvailable: function () {
                return true; }, },
            'Big Bomb Bag Purchase': { isAvailable: function () {
                return items.Zora || items.Sword || items.GFsword || items.FD || items.Goron; }, },  
            'Postmans Game': { isAvailable: function () {
                return true; }, }, 
            'Rosa Sisters': { isAvailable: function () {
                return items.Kamaro; }, }, 
            'Swordsmans School': { isAvailable: function () {
                return items.Sword; }, },
            'Trading Post Purchases': { isAvailable: function () {
                return true; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "East Clock Town",
        x: "58.3%",
        y: "51.0%",
        chestlist: {
            'Bombers Hideout Chest': { isAvailable: function () {
                return hasBoom(); }, },
            'East Clock Town Chest': { isAvailable: function () {
                return true; }, },
            'Gorman': { isAvailable: function () {
                return items.Deku && items.Goron && items.Zora && items.Romani; }, },
            'Honey and Darling Any Day': { isAvailable: function () {
                return items.Bombs || items.Bow; }, },
            'Honey and Darling Three Days': { isAvailable: function () {
                return items.Bombs && items.Bow; }, },
            'Madame Aroma in Office': { isAvailable: function () {
                return true; }, },   
            'Madame Aroma in Bar': { isAvailable: function () {
                return items.Kafei && items.ExpressMail; }, },
            'Mayor': { isAvailable: function () {
                return items.Couple; }, },  
            'Milk Bar Chateau': { isAvailable: function () {
                return items.Romani; }, },      
            'Milk Bar Milk': { isAvailable: function () {
                return items.Romani; }, },
            'Postmans Freedom Reward': { isAvailable: function () {
                return items.ExpressMail; }, },
            'Town Archery #1': { isAvailable: function () {
                return items.Bow; }, },   
            'Town Archery #2': { isAvailable: function () {
                return items.Bow; }, }, 
            'Treasure Chest Game Goron': { isAvailable: function () {
                return items.Goron; }, },                     
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
        {
        name: "Stock Pot Inn",
        x: "59.3%",
        y: "56.0%",
        chestlist: {

            'Anju and Kafei': { isAvailable: function () {
                return items.Pendant && items.Kafei; }, },
            'Grandma Long Story': { isAvailable: function () {
                return items.Allnight; }, },
            'Grandma Short Story': { isAvailable: function () {
                return items.Allnight; }, },
            'Inn Guest Room Chest': { isAvailable: function () {
                return items.Roomkey; }, },
            'Inn Reservation': { isAvailable: function () {
                return true; }, },
            'Inn Staff Room Chest': { isAvailable: function () {
                return true; }, },
            'Midnight Meeting': { isAvailable: function () {
                return items.Kafei; }, },
            'Toilet Hand': { isAvailable: function () {
                return items.LandDeed || items.SwampDeed || items.MountainDeed || items.OceanDeed || items.Letter || items.ExpressMail; }, },            
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Woodfall Temple",
        x: "14.5%",
        y: "15.0%",
        chestlist: {
            'Bow Chest': { isAvailable: function () { return items.Deku && canPlay(items.Sonata); }, },
            'Compass Chest': { isAvailable: function () { return items.Deku && canPlay(items.Sonata); }, },
            'Map Chest': { isAvailable: function () { return items.Deku && canPlay(items.Sonata); }, },
            'Small Key Chest': { isAvailable: function () { return items.Deku && canPlay(items.Sonata); }, },
            'Boss Key Chest': { isAvailable: function () { return items.Deku && canPlay(items.Sonata) && items.Bow; }, },
            'Odolwa': { isAvailable: function () { return items.Deku && canPlay(items.Sonata) && (items.Sword || items.GFsword || items.FD || items.Zora || items.Goron); }, },
        },
        isBeatable: function() {
            if (items.Deku && canPlay(items.Sonata) && items.Bow) {
                if (this.canGetChest() == 'available') {
                    return 'available';
                }
                return 'possible';
            } else {
                return "unavailable";
            }
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Stone Tower Temple",
        x: "14.5%",
        y: "42.0%",
        chestlist: {
            'Map Chest': { isAvailable: function () {
                return canPlay(items.Elegy) && (items.Goron && (items.shield >=2 || items.Light && items.Bow && items.Magic) || items.Zora && items.Light && items.Bow && items.Magic); }, },
            'Armos Room Chest': { isAvailable: function () {
                return canPlay(items.Elegy) && (items.Goron || items.Zora && (items.Light && items.Bow && items.Magic || items.Bottle)); }, },
            'Compass Chest': { isAvailable: function () {
                return canPlay(items.Elegy) && (items.Light && items.Bow && items.Magic || items.Bottle || items.shield >=2); }, },
            'Eyegore Room Chest': { isAvailable: function () {
                return canPlay(items.Elegy) && (items.Goron || items.Zora) || canPlay(items.Elegy) && (items.Light && items.Bow && items.Magic || items.Bottle); }, },    
            'Light Arrow Chest': { isAvailable: function () {
                return canPlay(items.Elegy) && items.Deku || canPlay(items.Elegy) && items.Light && items.Bow && items.Magic; }, },
            'Updraft Room Chest': { isAvailable: function () {
                return canPlay(items.Elegy) && items.Light && items.Bow && items.Magic; }, },
            'Boss Key Chest': { isAvailable: function () {
                return canPlay(items.Elegy) && items.Light && items.Bow && items.Magic; }, },
            'Giants Mask Chest': { isAvailable: function () {
                return canPlay(items.Elegy) && items.Light && items.Bow && items.Magic; }, },
            'Death Armos Room Chest': { isAvailable: function () {
                return canPlay(items.Elegy) && items.Light && items.Bow && items.Magic && (canPlay(items.Elegy) || items.Hookshot); }, },
            'Twinmold': { isAvailable: function () {
                return canPlay(items.Elegy) && items.Light && items.Bow && items.Magic; }, },
        },
         isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Snowhead Temple",
        x: "23.3%",
        y: "29.0%",
        chestlist: {
            'Bridge Room Chest': { isAvailable: function () {
                return canPlay(items.Lullaby) && items.Goron; }, },
            'Map Chest': { isAvailable: function () {
                return canPlay(items.Lullaby) && items.Goron; }, },
            'Block Room Chest': { isAvailable: function () {
                return canPlay(items.Lullaby) && items.Goron; }, },
            'Compass Chest': { isAvailable: function () {
                return canPlay(items.Lullaby) && items.Goron; }, },
            'Icicle Room Chest': { isAvailable: function () {
                return canPlay(items.Lullaby) && items.Goron && hasBoom(); }, },
            'Fire Arrows Chest': { isAvailable: function () {
                return canPlay(items.Lullaby) && items.Goron && hasBoom(); }, },
            'Boss Key Chest': { isAvailable: function () {
                return canPlay(items.Lullaby) && items.Goron && items.Fire && items.Bow && items.Magic; }, },    
            'Goht': { isAvailable: function () {
                return canPlay(items.Lullaby) && items.Goron && items.Fire && items.Bow && items.Magic; }, },           
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Great Bay Temple",
        x: "05.5%",
        y: "29.0%",
        chestlist: {
            'Map Chest': { isAvailable: function () {
                return canPlay(items.NewWave) && items.Zora; }, },
            'Compass Chest': { isAvailable: function () {
                return canPlay(items.NewWave) && items.Zora; }, },
            'Small Key Chest': { isAvailable: function () {
                return canPlay(items.NewWave) && items.Zora; }, },
            'Boss Key Chest': { isAvailable: function () {
                return canPlay(items.NewWave) && items.Zora; }, },    
            'Ice Arrow Chest': { isAvailable: function () {
                return canPlay(items.NewWave) && items.Zora; }, },
            'Gyorg': { isAvailable: function () {
                return canPlay(items.NewWave) && items.Zora && items.Ice && items.Bow && items.Magic; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Goron Village",
        x: "67.0%",
        y: "24.5%",
        chestlist: {
            'Baby Goron': { isAvailable: function () {
                return items.Bow && items.Goron ; } },
            'Biggest Bomb Bag Purchase': { isAvailable: function () {
                return items.Bow && items.Goron && items.Wallet >=1; } },
            'Mountain Scrub Trade': { isAvailable: function () {
                return items.Bow && items.Deku && items.SwampDeed; } },    
            'Goron Shop Purchases': { isAvailable: function () {
                return items.Bow; } },
            'Goron Village Ledge': { isAvailable: function () {
                return items.Bow; } },
            'Lens Cave Invisible Chest': { isAvailable: function () {
                return items.Bow;  } },
            'Lens Cave Rock Chest': { isAvailable: function () {
                return items.Bow && hasBoom();  } },
            'Lens Of Truth Chest': { isAvailable: function () {
                return items.Bow;  } },    
            'Powder Keg Challenge': { isAvailable: function () {
                return items.Bow && items.Goron && items.Magic && items.Fire;  } },     
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Twin Islands",
        x: "61.5%",
        y: "26.0%",
        chestlist: {
            'Goron Race': { isAvailable: function () {
                return items.Goht && items.Goron ; } },
            'Goron Racetrack Grotto': { isAvailable: function () {
                return items.Bow && (items.Goron || items.Hookshot); } },
            'Hot Spring Water Grotto': { isAvailable: function () {
                return items.Fire && items.Bow && items.Magic || canPlay(items.Healing) && items.Lens && items.Bottle && items.Goron || items.Goht; } },
            'Snowhead Map Purchase': { isAvailable: function () {
                return items.Bow; } },
            'Cave Chest': { isAvailable: function () {
                return items.Goht && items.Zora;  } },
            'Underwater Ramp Chest': { isAvailable: function () {
                return items.Goht && items.Zora;  } },
        },
              isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
   
    {
        name: "Termina Field",
        x: "55.5%",
        y: "59.5%",
        chestlist: {
            'Atronomy Telescope': { isAvailable: function () {
                return true; }, },
            'Bio Baba Grotto': { isAvailable: function () {
                return (items.Bombs || items.Blast || items.Goron) && (items.Zora || items.Hookshot); }, },
            'Business Scrub Purchase': { isAvailable: function () {
                return items.Wallet >=1; }, },
            'Dodongo Grotto': { isAvailable: function () {
                return items.Sword || items.Goron || items.stick || items.Zora || items.GFsword || items.FD || items.Bow || items.Bombs || items.Blast; }, },
            'Gossip Stones': { isAvailable: function () {
                return canPlay(items.Sonata) && items.Deku && (items.Bombs || items.Goron || items.Blast) || canPlay(items.NewWave) && items.Zora && (items.Bombs || items.Goron || items.Blast) || canPlay(items.Lullaby) && items.Goron; }, },
            'Kamaro': { isAvailable: function () {
                return canPlay(items.Healing); }, },
            'Peahat Grotto': { isAvailable: function () {
                return items.Sword || items.Goron || items.stick || items.Zora || items.GFsword || items.FD || items.Bow; }, },
            'Grass Chest': { isAvailable: function () {
                return true; }, },
            'Grass Grotto': { isAvailable: function () {
                return true; }, },
            'Pillar Grotto': { isAvailable: function () {
                return true; }, },
            'Stump Chest': { isAvailable: function () {
                return true; }, },
            'Underwater Chest': { isAvailable: function () {
                return items.Zora; }, },
        },
           isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Snowhead",
        x: "50.0%",
        y: "8.0%",
        chestlist: {
            'Snowhead Great Fairy': { isAvailable: function () {
                return items.Goron && canPlay(items.Lullaby); }, },
        },
          isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Path to Snowhead",
        x: "54.0%",
        y: "15.0%",
        chestlist: {
            'Grotto': { isAvailable: function () {
                return items.Goron && items.Bow; }, },
            'Pillar': { isAvailable: function () {
                return items.Goron && items.Bow; }, },    
        },
          isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Mountain Village",
        x: "56.0%",
        y: "25.0%",
        chestlist: {
            'Darmani': { isAvailable: function () {
                return items.Magic && items.Lens && canPlay(items.Healing); }, },
            'Hungry Goron': { isAvailable: function () {
                return items.Goron && items.Magic; }, },   
            'Mountain Smith Day 1': { isAvailable: function () {
                return items.Bow && items.Wallet >=1; }, },
            'Mountain Smith Day 2': { isAvailable: function () {
                return items.Bow && items.GoldDust; }, },
            'Mountain Spring Grotto': { isAvailable: function () {
                return items.Goht; }, },
            'Waterfall Chest': { isAvailable: function () {
                return items.Goht; }, },             
        },
          isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Road to Southern Swamp",
        x: "57.0%",
        y: "69.0%",
        chestlist: {
            'Grotto': { isAvailable: function () {
                return true; }, },
            'Tree': { isAvailable: function () {
                return items.Bow || items.Hookshot || items.Deku && items.Magic || items.Zora || items.Blast; }, },
            'Woodfall Map Purchase': { isAvailable: function () {
                return items.Bow || items.Hookshot || items.Deku && items.Magic || items.Zora; }, },
            'Swamp Archery #1': { isAvailable: function () {
                return items.Bow; }, },
            'Swamp Archery #2': { isAvailable: function () {
                return items.Bow; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Southern Swamp",
        x: "58.0%",
        y: "80.0%",
        chestlist: {
            'Boat Archery': { isAvailable: function () {
                return items.Odolwa && items.Bow; }, },
            'Kotake': { isAvailable: function () {
                return true; }, },
            'Koume': { isAvailable: function () {
                return items.Bottle; }, },
            'Mystery Woods Grotto': { isAvailable: function () {
                return true; }, },
            'Near Swamp Spider House Grotto': { isAvailable: function () {
                return true; }, },
            'Pictograph Contest Winner': { isAvailable: function () {
                return items.Pictobox; }, },
            'Music Statue': { isAvailable: function () {
                return items.Deku; }, },
            'Swamp Scrub Trade': { isAvailable: function () {
                return items.LandDeed; }, },
            'Swamp Spider House Reward': { isAvailable: function () {
                return (items.Bow || items.Zora || items.Hookshot) && (items.Hookshot || items.Beans) && (items.Sword || items.GFsword || items.FD); }, },
            'Tourist Center Roof': { isAvailable: function () {
                return items.Deku && items.LandDeed || items.Goron; }, },
            'Witch Shop Blue Potion': { isAvailable: function () {
                return items.Scents && items.Bottle; }, },
            'Witch Shop Green Potion': { isAvailable: function () {
                return true; }, },
            'Witch Shop Red Potion': { isAvailable: function () {
                return true; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Woodfall",
        x: "61.0%",
        y: "87.0%",
        chestlist: {
            'Behind Woodfall Owl Chest': { isAvailable: function () {
                return items.Deku; }, },
            'Entrance Chest': { isAvailable: function () {
                return items.Deku; }, },
            'Bridge Chest': { isAvailable: function () {
                return items.Deku; }, },
            'Woodfall Great Fairy': { isAvailable: function () {
                return items.Deku && canPlay(items.Sonata) && items.Bow; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Deku Palace",
        x: "58.0%",
        y: "96.0%",
        chestlist: {
            'Bean Grotto': { isAvailable: function () {
                return true; }, },
            'Bean Man': { isAvailable: function () {
                return true; }, },
            'Butler': { isAvailable: function () {
                return items.DekuPrincess; }, },
            'Deku Palace West Garden': { isAvailable: function () {
                return true; }, },
            'Imprisoned Monkey': { isAvailable: function () {
                return items.Deku; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Milk Road",
        x: "50.5%",
        y: "62.5%",
        chestlist: {
            'Gorman Bros Race': { isAvailable: function () {
                return canPlay(items.EponasSong); }, },
            'Romani Ranch Map Purchase': { isAvailable: function () {
                return items.Bow || items.Hookshot || items.Zora || items.Deku && items.Magic; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Romani Ranch",
        x: "44.5%",
        y: "63.0%",
        chestlist: {
            'Aliens Defense': { isAvailable: function () {
                return items.Goron && items.PowderKeg && items.Bow; }, },
            'Cremia': { isAvailable: function () {
                return items.Goron && items.PowderKeg && items.Bow; }, },
            'Dog Race': { isAvailable: function () {
                return true; }, },
            'Grog': { isAvailable: function () {
                return items.Bremen; }, },
            'Romanis Game': { isAvailable: function () {
                return items.Goron && items.PowderKeg; }, },            
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },    
    {
        name: "Great Bay Coast",
        x: "40.0%",
        y: "52.0%",
        chestlist: {
            'Baby Zoras': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora && items.Goron && items.Hookshot && items.Bottle; }, },
            'Fisherman Game': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Gyorg; }, },
            'Ledge': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Hookshot && items.Beans; }, },
            'Great Bay Map Purchase': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Bow || items.Hookshot || items.Zora || items.Deku && items.Magic; }, },
            'Lab Fish': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Bottle; }, },
            'Mikau': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && canPlay(items.Healing); }, },
            'Ocean Spider House Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && hasBoom() && items.Bow && items.Hookshot; }, },
            'Ocean Spider House Day 1 Reward': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && hasBoom() && items.Hookshot; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Zora Cape",
        x: "40.0%",
        y: "72.0%",
        chestlist: {
            'Beaver Race #1': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora && items.Hookshot; }, },
            'Beaver Race #2': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora && items.Hookshot; }, },
            'Ocean Great Fairy': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && canPlay(items.NewWave) && items.Zora && items.Ice && items.Bow && items.Magic; }, },
            'Grotto': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && hasBoom() || items.Goron; }, },
            'Ledge With Tree Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Hookshot; }, },
            'Ledge Without Tree Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Hookshot; }, },
            'Like-Like': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora; }, },
            'Underwater Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Zora Hall",
        x: "32.0%",
        y: "65.0%",
        chestlist: {
            'Evan': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora && items.Ocarina; }, },
            'Lulus Room Ledge': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora; }, },
            'Ocean Scrub Trade': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora && items.Goron && items.MountainDeed; }, },
            'Stage Lights': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Fire && items.Magic && items.Bow; }, },
            'Zora Shop Purchases': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs); }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Pinnacle Rock",
        x: "32.0%",
        y: "40.0%",
        chestlist: {
            'Lower Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora; }, },
            'Upper Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora; }, },
            'Seahorses': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora && items.Bottle && items.Pictobox; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    }, 
    {
        name: "Pirates Fortress Exterior",
        x: "38.5%",
        y: "28.0%",
        chestlist: {
            'Corner Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora; }, },
            'Log Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora; }, },
            'Sand Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    }, 
    {
        name: "Pirates Fortress Sewer",
        x: "40.5%",
        y: "23.0%",
        chestlist: {
            'Maze Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora && items.Goron; }, },
            'Cage': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora && items.Goron; }, },
            'Cage Room Deep Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora && items.Goron; }, },
            'Cage Room Shallow Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora && items.Goron; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },   
    {
        name: "Pirates Fortress Interior",
        x: "40.5%",
        y: "18.0%",
        chestlist: {
            'Hookshot Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora && (items.Goron || items.Hookshot) && (items.Bow || items.Hookshot || items.Deku && items.Magic); }, },
            'Guard Room Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora && (items.Goron || items.Hookshot); }, },
            'Lower Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora && (items.Goron || items.Hookshot); }, },
            'Upper Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora && (items.Goron || items.Hookshot); }, },
            'Tank Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Zora && items.Hookshot; }, },    
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
   {
        name: "Road to Ikana",
        x: "66.0%",
        y: "50.5%",
        chestlist: {
            'Pillar Chest': { isAvailable: function () {
                return items.Hookshot; }, },
            'Grotto': { isAvailable: function () {
                return items.Goron; }, },
            'Invisible Soldier': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Lens && items.Magic && items.Bottle; }, },    
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },  
   {
        name: "Ikana Graveyard",
        x: "70.0%",
        y: "41.5%",
        chestlist: {
            'Captain Keetas Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && canPlay(items.Sonata); }, },
            'Dampe Digging': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Captain; }, },
            'Day 1 Grave Bats': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Captain && (items.Sword || items.Goron || items.Zora || items.GFsword || items.FD || items.Bow || items.Bombs || items.Blast || items.stick); }, },
            'Day 1 Grave Tablet': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Captain && (items.Sword || items.Goron || items.Zora || items.GFsword || items.FD || items.Bombs || items.Blast); }, },
            'Grotto': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && hasBoom(); }, },
            'Iron Knuckle Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Captain && (items.Sword || items.Goron || items.Zora || items.GFsword || items.FD || items.Bombs || items.Blast); }, },            
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
       {
        name: "Ikana Canyon",
        x: "78.0%",
        y: "53.5%",
        chestlist: {
            'Canyon Scrub Trade': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && (items.Garo || items.Gibdo) && items.Hookshot && items.Zora && items.OceanDeed; }, },
            'Ledge': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && (items.Garo || items.Gibdo) && items.Hookshot && items.Zora && items.OceanDeed && items.Deku; }, },
            'Great Fairy': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && (items.Garo || items.Gibdo) && items.Hookshot && items.Light && items.Bow && items.Magic; }, },
            'Pamelas Father': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && (items.Garo || items.Gibdo) && items.Hookshot && canPlay(items.SongofStorms) && canPlay(items.Healing); }, },
            'Poe Hut': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && (items.Garo || items.Gibdo) && items.Hookshot; }, },
            'Secret Shrine Grotto': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && (items.Garo || items.Gibdo) && items.Hookshot; }, },        
            'Stone Tower Map Purchase': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && items.Bow || items.Hookshot || items.Zora || items.Deku && items.Magic ; }, },       
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },     
       {
        name: "Beneath the Well",
        x: "78.0%",
        y: "47.5%",
        chestlist: {
            'Mirror Shield Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && (items.Garo || items.Gibdo) && items.Hookshot && items.Gibdo && items.Bottle; }, },
            'Well Left Path Chest ': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && (items.Garo || items.Gibdo) && items.Hookshot && items.Gibdo && items.Bottle; }, },
            'Well Right Path Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && (items.Garo || items.Gibdo) && items.Hookshot && items.Gibdo && items.Bottle; }, },       
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Ikana Castle",
        x: "77.0%",
        y: "61.5%",
        chestlist: {
            'Pillar': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && (items.Light && items.Bow && items.Magic || items.Zora) && items.Deku; }, },
            'Ikana King': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && (items.Light || items.Zora) && items.Bow && items.Magic && items.Fire && items.shield >=2; }, }, 
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },   
    {
        name: "Stone Tower",
        x: "82.0%",
        y: "38.5%",
        chestlist: {
            'Inverted Stone Tower Left Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && (items.Garo || items.Gibdo) && items.Hookshot && items.Light && items.Bow && items.Magic && canPlay(items.Elegy); }, },
            'Inverted Stone Tower Middle Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && (items.Garo || items.Gibdo) && items.Hookshot && items.Light && items.Bow && items.Magic && canPlay(items.Elegy); }, }, 
            'Inverted Stone Tower Right Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && (items.Garo || items.Gibdo) && items.Hookshot && items.Light && items.Bow && items.Magic && canPlay(items.Elegy); }, },    
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    }, 
       {
        name: "Secret Shrine",
        x: "74.5%",
        y: "50.5%",
        chestlist: {
            'Dinolfos Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && (items.Garo || items.Gibdo) && items.Hookshot && items.Light && items.Bow && items.Magic; }, },
            'Wizzrobe Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && (items.Garo || items.Gibdo) && items.Hookshot && items.Light && items.Bow && items.Magic; }, },
            'Wart Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && (items.Garo || items.Gibdo) && items.Hookshot && items.Light && items.Bow && items.Magic; }, },
            'Garo Master Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && (items.Garo || items.Gibdo) && items.Hookshot && items.Light && items.Bow && items.Magic; }, },
            'Final Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Goron && items.Bombs) && (items.Garo || items.Gibdo) && items.Hookshot && items.Light && items.Bow && items.Magic; }, },      
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },                               
];

//define overworld chests
var chests = [
   
]

