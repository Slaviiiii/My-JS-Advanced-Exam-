class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    let playersArr = [];
    for (let footballer of footballPlayers) {
      let [name, age, value] = footballer.split('/');
      age = Number(age);
      value = Number(value);
      let finded = this.invitedPlayers.find(f => f.name === name);
      if (finded !== undefined) {
        if (value > finded.value) {
          finded.value += value;
        }
      } else {
        if (!playersArr.includes(name)) {
          playersArr.push(name);
        }
        this.invitedPlayers.push({ name, age, value });
      }
    }
    return `You successfully invite ${playersArr.join(', ')}.`;
  }

  signContract(selectedPlayer) {
    let [name, offer] = selectedPlayer.split('/');
    let finded = this.invitedPlayers.find(f => f.name === name);
    offer = Number(offer);
    if (finded === undefined) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    if (finded.value > offer) {
      throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${finded.value - offer} million more are needed to sign the contract!`);
    }

    finded.value = "Bought";
    return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
  }

  ageLimit(name, age) {
    let finded = this.invitedPlayers.find(f => f.name === name);
    if (finded === undefined) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    if (finded.age < age) {
      let difference = age - finded.age;
      if (difference < 5) {
        return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
      } else if (difference > 5) {
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
      }
    } else {
      return `${name} is above age limit!`;
    }
  }

  transferWindowResult() {
    let result = ['Players list:'];
    let sorted = this.invitedPlayers.sort((a, b) => a.name - b.name);
    for (let footballer of sorted) {
      result.push(`Player ${footballer.name}-${footballer.value}`);
    }

    return result.join('\n');
  }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());