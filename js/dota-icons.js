function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev, el) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    el.appendChild(document.getElementById(data));
  }

  // BIG BOY
  function distributeHeroes() {
    let heroList = [];
    // 1 - 10
    heroList.push({index: heroList.length, name: "Abaddon", icon: "images/hero-icons/abaddon.png"});
    heroList.push({index: heroList.length, name: "Alchemist", icon: "images/hero-icons/alchemist.png"});
    heroList.push({index: heroList.length, name: "Ancient Apparition", icon: "images/hero-icons/ancient_apparition.png"});
    heroList.push({index: heroList.length, name: "Antimage", icon: "images/hero-icons/antimage.png"});
    heroList.push({index: heroList.length, name: "Arc Warden", icon: "images/hero-icons/arc_warden.png"});
    heroList.push({index: heroList.length, name: "Axe", icon: "images/hero-icons/axe.png"});
    heroList.push({index: heroList.length, name: "Bane", icon: "images/hero-icons/bane.png"});
    heroList.push({index: heroList.length, name: "Batrider", icon: "images/hero-icons/batrider.png"});
    heroList.push({index: heroList.length, name: "Beastmaster", icon: "images/hero-icons/beastmaster.png"});
    heroList.push({index: heroList.length, name: "Bloodseeker", icon: "images/hero-icons/bloodseeker.png"});
    // 11 - 20
    heroList.push({index: heroList.length, name: "Bounty Hunter", icon: "images/hero-icons/bounty_hunter.png"});
    heroList.push({index: heroList.length, name: "Brewmaster", icon: "images/hero-icons/brewmaster.png"});
    heroList.push({index: heroList.length, name: "Bristleback", icon: "images/hero-icons/bristleback.png"});
    heroList.push({index: heroList.length, name: "Broodmother", icon: "images/hero-icons/broodmother.png"});
    heroList.push({index: heroList.length, name: "Centaur", icon: "images/hero-icons/centaur.png"});
    heroList.push({index: heroList.length, name: "Chaos Knight", icon: "images/hero-icons/chaos_knight.png"});
    heroList.push({index: heroList.length, name: "Chen", icon: "images/hero-icons/chen.png"});
    heroList.push({index: heroList.length, name: "Clinkz", icon: "images/hero-icons/clinkz.png"});
    heroList.push({index: heroList.length, name: "Clockwerk", icon: "images/hero-icons/clockwerk.png"});
    heroList.push({index: heroList.length, name: "Crystal Maiden", icon: "images/hero-icons/crystal_maiden.png"});
    // 21 - 30
    heroList.push({index: heroList.length, name: "Dark Seer", icon: "images/hero-icons/dark_seer.png"});
    heroList.push({index: heroList.length, name: "Dark Willow", icon: "images/hero-icons/dark_willow.png"});
    heroList.push({index: heroList.length, name: "Dawnbreaker", icon: "images/hero-icons/dawnbreaker.png"});
    heroList.push({index: heroList.length, name: "Dazzle", icon: "images/hero-icons/dazzle.png"});
    heroList.push({index: heroList.length, name: "Death Prophet", icon: "images/hero-icons/death_prophet.png"});
    heroList.push({index: heroList.length, name: "Disruptor", icon: "images/hero-icons/disruptor.png"});
    heroList.push({index: heroList.length, name: "Doom", icon: "images/hero-icons/doom_bringer.png"});
    heroList.push({index: heroList.length, name: "Dragon Knight", icon: "images/hero-icons/dragon_knight.png"});
    heroList.push({index: heroList.length, name: "Drow Ranger", icon: "images/hero-icons/drow_ranger.png"});
    heroList.push({index: heroList.length, name: "Earth Spirit", icon: "images/hero-icons/earth_spirit.png"});
    // 31 - 40
    heroList.push({index: heroList.length, name: "Earthshaker", icon: "images/hero-icons/earthshaker.png"});
    heroList.push({index: heroList.length, name: "Elder Titan", icon: "images/hero-icons/elder_titan.png"});
    heroList.push({index: heroList.length, name: "Ember Spirit", icon: "images/hero-icons/ember_spirit.png"});
    heroList.push({index: heroList.length, name: "Enchantress", icon: "images/hero-icons/enchantress.png"});
    heroList.push({index: heroList.length, name: "Enigma", icon: "images/hero-icons/enigma.png"});
    heroList.push({index: heroList.length, name: "Faceless Void", icon: "images/hero-icons/faceless_void.png"});
    heroList.push({index: heroList.length, name: "Grimstroke", icon: "images/hero-icons/grimstroke.png"});
    heroList.push({index: heroList.length, name: "Gyrocopter", icon: "images/hero-icons/gyrocopter.png"});
    heroList.push({index: heroList.length, name: "Hoodwink", icon: "images/hero-icons/hoodwink.png"});
    heroList.push({index: heroList.length, name: "Huskar", icon: "images/hero-icons/huskar.png"});
    // 41 - 50
    heroList.push({index: heroList.length, name: "Invoker", icon: "images/hero-icons/invoker.png"});
    heroList.push({index: heroList.length, name: "Io", icon: "images/hero-icons/io.png"});
    heroList.push({index: heroList.length, name: "Jakiro", icon: "images/hero-icons/jakiro.png"});
    heroList.push({index: heroList.length, name: "Juggernaut", icon: "images/hero-icons/juggernaut.png"});
    heroList.push({index: heroList.length, name: "Keeper of the Light", icon: "images/hero-icons/keeper_of_the_light.png"});
    heroList.push({index: heroList.length, name: "Kunkka", icon: "images/hero-icons/kunkka.png"});
    heroList.push({index: heroList.length, name: "Legion Commander", icon: "images/hero-icons/legion_commander.png"});
    heroList.push({index: heroList.length, name: "Leshrac", icon: "images/hero-icons/leshrac.png"});
    heroList.push({index: heroList.length, name: "Lich", icon: "images/hero-icons/lich.png"});
    heroList.push({index: heroList.length, name: "Lifestealer", icon: "images/hero-icons/life_stealer.png"});
    // 51 - 60
    heroList.push({index: heroList.length, name: "Lina", icon: "images/hero-icons/lina.png"});
    heroList.push({index: heroList.length, name: "Lion", icon: "images/hero-icons/lion.png"});
    heroList.push({index: heroList.length, name: "Lone Druid", icon: "images/hero-icons/lone_druid.png"});
    heroList.push({index: heroList.length, name: "Luna", icon: "images/hero-icons/luna.png"});
    heroList.push({index: heroList.length, name: "Lycan", icon: "images/hero-icons/lycan.png"});
    heroList.push({index: heroList.length, name: "Magnus", icon: "images/hero-icons/magnus.png"});
    heroList.push({index: heroList.length, name: "Mars", icon: "images/hero-icons/mars.png"});
    heroList.push({index: heroList.length, name: "Medusa", icon: "images/hero-icons/medusa.png"});
    heroList.push({index: heroList.length, name: "Meepo", icon: "images/hero-icons/meepo.png"});
    heroList.push({index: heroList.length, name: "Mirana", icon: "images/hero-icons/mirana.png"});
    // 61 - 70
    heroList.push({index: heroList.length, name: "Monkey King", icon: "images/hero-icons/monkey_king.png"});
    heroList.push({index: heroList.length, name: "Morphling", icon: "images/hero-icons/morphling.png"});
    heroList.push({index: heroList.length, name: "Naga Siren", icon: "images/hero-icons/naga_siren.png"});
    heroList.push({index: heroList.length, name: "Nature's Prophet", icon: "images/hero-icons/natures_prophet.png"});
    heroList.push({index: heroList.length, name: "Necrophos", icon: "images/hero-icons/necrophos.png"});
    heroList.push({index: heroList.length, name: "Night Stalker", icon: "images/hero-icons/night_stalker.png"});
    heroList.push({index: heroList.length, name: "Nyx Assassin", icon: "images/hero-icons/nyx_assassin.png"});
    heroList.push({index: heroList.length, name: "Ogre Magi", icon: "images/hero-icons/ogre_magi.png"});
    heroList.push({index: heroList.length, name: "Omniknight", icon: "images/hero-icons/omniknight.png"});
    heroList.push({index: heroList.length, name: "Oracle", icon: "images/hero-icons/oracle.png"});
    // 71 - 80
    heroList.push({index: heroList.length, name: "Outworld Destroyer", icon: "images/hero-icons/outworld_destroyer.png"});
    heroList.push({index: heroList.length, name: "Pangolier", icon: "images/hero-icons/pangolier.png"});
    heroList.push({index: heroList.length, name: "Phantom Assassin", icon: "images/hero-icons/phantom_assassin.png"});
    heroList.push({index: heroList.length, name: "Phantom Lancer", icon: "images/hero-icons/phantom_lancer.png"});
    heroList.push({index: heroList.length, name: "Phoenix", icon: "images/hero-icons/phoenix.png"});
    heroList.push({index: heroList.length, name: "Puck", icon: "images/hero-icons/puck.png"});
    heroList.push({index: heroList.length, name: "Pudge", icon: "images/hero-icons/pudge.png"});
    heroList.push({index: heroList.length, name: "Pugna", icon: "images/hero-icons/pugna.png"});
    heroList.push({index: heroList.length, name: "Queen of Pain", icon: "images/hero-icons/queen_of_pain.png"});
    heroList.push({index: heroList.length, name: "Razor", icon: "images/hero-icons/razor.png"});
    //81 - 90
    heroList.push({index: heroList.length, name: "Riki", icon: "images/hero-icons/riki.png"});
    heroList.push({index: heroList.length, name: "Rubick", icon: "images/hero-icons/rubick.png"});
    heroList.push({index: heroList.length, name: "Sand King", icon: "images/hero-icons/sand_king.png"});
    heroList.push({index: heroList.length, name: "Shadow Demon", icon: "images/hero-icons/shadow_demon.png"});
    heroList.push({index: heroList.length, name: "Shadow Fiend", icon: "images/hero-icons/shadow_fiend.png"});
    heroList.push({index: heroList.length, name: "Shadow Shaman", icon: "images/hero-icons/shadow_shaman.png"});
    heroList.push({index: heroList.length, name: "Silencer", icon: "images/hero-icons/silencer.png"});
    heroList.push({index: heroList.length, name: "Skywrath Mage", icon: "images/hero-icons/skywrath_mage.png"});
    heroList.push({index: heroList.length, name: "Slardar", icon: "images/hero-icons/slardar.png"});
    heroList.push({index: heroList.length, name: "Slark", icon: "images/hero-icons/slark.png"});
    // 91 - 100
    heroList.push({index: heroList.length, name: "Snapfire", icon: "images/hero-icons/snapfire.png"});
    heroList.push({index: heroList.length, name: "Sniper", icon: "images/hero-icons/sniper.png"});
    heroList.push({index: heroList.length, name: "Spectre", icon: "images/hero-icons/spectre.png"});
    heroList.push({index: heroList.length, name: "Spirit Breaker", icon: "images/hero-icons/spirit_breaker.png"});
    heroList.push({index: heroList.length, name: "Storm Spirit", icon: "images/hero-icons/storm_spirit.png"});
    heroList.push({index: heroList.length, name: "Sven", icon: "images/hero-icons/sven.png"});
    heroList.push({index: heroList.length, name: "Techies", icon: "images/hero-icons/techies.png"});
    heroList.push({index: heroList.length, name: "Templar Assassin", icon: "images/hero-icons/templar_assassin.png"});
    heroList.push({index: heroList.length, name: "Terrorblade", icon: "images/hero-icons/terrorblade.png"});
    heroList.push({index: heroList.length, name: "Tidehunter", icon: "images/hero-icons/tidehunter.png"});
    // 100 - 110
    heroList.push({index: heroList.length, name: "Timbersaw", icon: "images/hero-icons/timbersaw.png"});
    heroList.push({index: heroList.length, name: "Tinker", icon: "images/hero-icons/tinker.png"});
    heroList.push({index: heroList.length, name: "Tiny", icon: "images/hero-icons/tiny.png"});
    heroList.push({index: heroList.length, name: "Treant Protector", icon: "images/hero-icons/treant_protector.png"});
    heroList.push({index: heroList.length, name: "Troll Warlord", icon: "images/hero-icons/troll_warlord.png"});
    heroList.push({index: heroList.length, name: "Tusk", icon: "images/hero-icons/tusk.png"});
    heroList.push({index: heroList.length, name: "Underlord", icon: "images/hero-icons/underlord.png"});
    heroList.push({index: heroList.length, name: "Undying", icon: "images/hero-icons/undying.png"});
    heroList.push({index: heroList.length, name: "Ursa", icon: "images/hero-icons/ursa.png"});
    heroList.push({index: heroList.length, name: "Vengeful Spirit", icon: "images/hero-icons/vengeful_spirit.png"});
    // 111 - 120
    heroList.push({index: heroList.length, name: "Venomancer", icon: "images/hero-icons/venomancer.png"});
    heroList.push({index: heroList.length, name: "Viper", icon: "images/hero-icons/viper.png"});
    heroList.push({index: heroList.length, name: "Visage", icon: "images/hero-icons/visage.png"});
    heroList.push({index: heroList.length, name: "Void Spirit", icon: "images/hero-icons/void_spirit.png"});
    heroList.push({index: heroList.length, name: "Warlock", icon: "images/hero-icons/warlock.png"});
    heroList.push({index: heroList.length, name: "Weaver", icon: "images/hero-icons/weaver.png"});
    heroList.push({index: heroList.length, name: "Windranger", icon: "images/hero-icons/windranger.png"});
    heroList.push({index: heroList.length, name: "Winter Wyvern", icon: "images/hero-icons/winter_wyvern.png"});
    heroList.push({index: heroList.length, name: "Witch Doctor", icon: "images/hero-icons/witch_doctor.png"});
    heroList.push({index: heroList.length, name: "Wraith King", icon: "images/hero-icons/wraith_king.png"});
    // 121
    heroList.push({index: heroList.length, name: "Zeus", icon: "images/hero-icons/zeus.png"});

    var id = 0; 
    var rolls = Math.ceil(heroList.length / 2);
    var teamA_pool = [];
    var teamB_pool = [];
    var teamA_poolDiv = document.getElementById("iconZone_A_0");
    var teamB_poolDiv = document.getElementById("iconZone_B_0");

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let seed = urlParams.get('seed');
    Math.seedrandom(seed);

    // Split heroes into two groups.
    while (rolls > 0) {
       var roll = Math.floor(Math.random() * (heroList.length));
       teamA_pool.push(heroList[roll]);
       heroList.splice(roll, 1);
       rolls--;
       id++;
    }
    while (heroList.length > 0) {
      teamB_pool.push(heroList[0]);
      heroList.shift();
      id++;
    }

    // Sort the new arrays.
    teamA_pool.sort(function(a, b) {
      return a.index - b.index;
    });
    teamB_pool.sort(function(a, b) {
      return a.index - b.index;
    });

    // Push arrays to the hero lists.
    teamA_pool.forEach(function(element) {
      teamA_poolDiv.innerHTML = teamA_poolDiv.innerHTML + `<img id="icon${element.index}" title="${element.name}" src="${element.icon}" draggable="true" ondragstart="drag(event)" width="96" height="54">`
    });

    teamB_pool.forEach(function(element) {
      teamB_poolDiv.innerHTML = teamB_poolDiv.innerHTML + `<img id="icon${element.index}" title="${element.name}" src="${element.icon}" draggable="true" ondragstart="drag(event)" width="98" height="54">`
    });
  }