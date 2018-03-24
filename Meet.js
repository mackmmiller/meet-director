class Meet {
  constructor(name, date, location, host, events, genders, groups, entries) {
    this.name = name;
    this.date = date;
    this.location = location;
    this.host = host;
    this.events = events;
    this.genders = genders;
    this.groups = groups;
    this.entries = entries;
  }

  eventList() {
    const { events, genders, groups } = this;
    let sheet = []
    let k = 0;
    events.forEach(event => {
      groups.forEach(group => {
        genders.forEach(gender => {
          k++;
          sheet.push({ number: k, gender, group, event })
        });
      });
    });
    return sheet;
  }

  createPsychSheet(events) {
    const { entries } = this;
    let sheet = [];
    events.forEach(({ gender, group: { name, min, max }, event }) => {
      const swimmers = entries.filter(entry => entry.events.includes(event) && entry.age >= min && entry.age < max);
      console.log(swimmers);
    })
    return 'done';
  }
}

module.exports = Meet;