import java.util.Scanner;

public class rock {
	static Scanner scann = new Scanner(System.in);

	public static void main(String[] args) {
		System.out.println(Msg.INTRO.toUpperCase());
		System.out.print(Msg.PRESS_ENTER);
		scann.nextLine();
		handleUserChoice();
	}

	public static void handleUserChoice() {
		System.out.println(Msg.RPS_OPTIONS);
		String rspUsrOption = scann.nextLine();
		if (rspUsrOption.equals("r") || rspUsrOption.equals("p") || rspUsrOption.equals("s")) {
			handleCompStrat(rspUsrOption);
		} else {
			handleUserChoice();
		}
	}

	public static void handleCompStrat(String letter) {
		CompRcpChoice choice = new CompRcpChoice();
		if (choice.rockCase) {
			CompRcpChoice.handleChoosing(letter, "r");
		} else if (choice.paperCase) {
			CompRcpChoice.handleChoosing(letter, "p");
		} else if (choice.scissorCase) {
			CompRcpChoice.handleChoosing(letter, "s");
		}
	}
};

class CompRcpChoice {
	double compInput = Math.random() * 3;
	boolean rockCase = (compInput < 1);
	boolean paperCase = (compInput < 2 && compInput > 1);
	boolean scissorCase = (compInput > 2);

	public static void handleChoosing(String usrChoice, String compChoice) {
		System.out.print("you choose [" + usrChoice + "] computer choose [" + compChoice + "] its a ");
		if (usrChoice.equals(compChoice)) {
			System.out.println("tie");
			return;
		}
		System.out.print(chooseWin(usrChoice, compChoice));
	}

	public static String chooseWin(String usrChoice, String compChoice) {
		String outcome = "idk";
		switch (usrChoice) {
			case "r":
				outcome = compChoice.equals("s") ? "win" : "loss";
				break;
			case "p":
				outcome = compChoice.equals("r") ? "win" : "loss";
				break;
			case "s":
				outcome = compChoice.equals("p") ? "win" : "loss";
		}
		return outcome;
	}
}

class Msg {
	static String INTRO = "play rock paper scissor with a computer!";
	static String PRESS_ENTER = "press enter to start";
	static String RPS_OPTIONS = "type your choice rock=[r], paper=[p], scissor=[s]";
};