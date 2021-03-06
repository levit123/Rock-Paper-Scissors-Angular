import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//defines the properties of the class used in the projects
export class AppComponent {
  //variable for the human player's score
  userScore = 0;
  //variable for the computer player's score
  compScore = 0;
  //string variable for the human player's chosen option
  userSelected: string;
  //string varaible for the computer player's chosen option
  compSelected: string;
  action: string;
  status: string;
  //array containing the options the players can choose from
  compWeapons = [
  'rock',
  'paper',
  'scissors'
  ];

  //function for handling the user's chosen option
  userPick(userWeapon: string): void {
    this.userSelected = userWeapon;
    console.log(this.userSelected);

    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 3);
      this.compSelected = this.compWeapons[randomNum];
      console.log(this.compSelected);
      this.checkResult();
    }, 1000);
  }

  clearField() {
    setTimeout(() => {
      this.status = '';
      this.userSelected = '';
      this.compSelected = '';
    }, 1500);
  }

  win(user, comp) {
    this.userScore++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'beats';
    this.status = '. You win!';
    this.clearField();
  }

  lose(user, comp) {
    this.compScore++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'loses to';
    this.status = '. You lose!';
    this.clearField();
  }
  
  draw(user, comp) {
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'and';
    this.status = '. You draw!';
    this.clearField();
  }

  checkResult() {
    const userChoice = this.userSelected;
    const compChoice = this.compSelected;
    switch (userChoice + compChoice) {
      case 'rockscissors':
      case 'paperrock':
      case 'scissorspaper':
        this.win(userChoice, compChoice);
        break;
      case 'rockpaper':
      case 'scissorsrock':
      case 'paperscissors':
        this.lose(userChoice, compChoice); 
        break;
      default:
        this.draw(userChoice, compChoice);
        break;
    }
  }
}
