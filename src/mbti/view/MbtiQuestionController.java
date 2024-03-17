package mbti.view;

import java.io.IOException;
import java.net.URL;
import java.util.ResourceBundle;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.stage.Stage;
import mbti.question.Article;
import mbti.question.Question;
import member.dao.MemberDAO;
import member.dto.MemberDTO;


public class MbtiQuestionController implements Initializable {
	@FXML public Label lbMbtiQuestion;
	@FXML public Button btnYes;
	@FXML public Button btnNo;

	Question qt;
	MemberDAO dao;
	Article article;
	String mbtiresult;
	public int num;
	public int[] scores;
	private boolean[] answers;
	
	@Override
	public void initialize(URL arg0, ResourceBundle arg1) {
		// TODO Auto-generated method stub
		dao = new MemberDAO();
		answers = new boolean[20];
		scores = new int[4];
		qt = new Question();
		String[] questions = qt.getQuestions();
		lbMbtiQuestion.setText(questions[0]);
		btnYes.setOnAction(event->{
			try {
				handleYes(event);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		});
		btnNo.setOnAction(event->{
			try {
				handleNo(event);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		});
	}
	public void handlelogin() {
		try {
			Stage stage = new Stage();
			FXMLLoader loader = new FXMLLoader(getClass().getResource("../../login/view/Login.fxml"));
			Parent root2 = loader.load();
			Scene scene = new Scene(root2);
			stage.setScene(scene);
			stage.show();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	public void handlejoin(){
		try {
			Stage stage = new Stage();
			FXMLLoader loader = new FXMLLoader(getClass().getResource("../../login/join/view/join.fxml"));
			Parent root2 = loader.load();
			Scene scene = new Scene(root2);
			stage.setScene(scene);
			stage.show();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	public void handleYes(ActionEvent event){
		article = new Article();
		int[][] scoringGuide = article.getScoringGuide();
		answers[num] = true;
		for (int j = 0; j < 4; j++) {
			scores[j] += scoringGuide[num][j];
			System.out.println(scores[j]);
		}
		num++;
		String[] questions = qt.getQuestions();
		if(questions.length > num) {
			lbMbtiQuestion.setText(questions[num]);
		}else {
			try {
				int uid = dao.getnonmemberUid();
				String result = QuestiongetResult();
				dao.setMbtiTemporarySave(result,uid);
				MbtiResultYes();
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	public void handleNo(ActionEvent event){
		answers[num] = false;
		num++;
		String[] questions = qt.getQuestions();
		if(questions.length > num) {
			lbMbtiQuestion.setText(questions[num]);
		}else {
			try {
				int uid = dao.getnonmemberUid();
				String result = QuestiongetResult();
				dao.setMbtiTemporarySave(result,uid);
				MbtiResultNo();
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	public void handleback() {
		if(num > 0) {
			num--;
			article = new Article();
			int[][] scoringGuide = article.getScoringGuide();
			for (int j = 0; j < 4; j++) {
				scores[j] -= answers[num] ? scoringGuide[num][j] : 0;
				if(scores[j] < 0) {
					scores[j] = 0;
				}
				System.out.println(scores[j]);
			}
			
			String[] questions = qt.getQuestions();
			lbMbtiQuestion.setText(questions[num]);
		}
	}
	public void MbtiResultYes() throws Exception{
		Parent second = FXMLLoader.load(getClass().getResource("MbtiResult.fxml") );
		Scene scene = new Scene(second);
		Stage primaryStage = (Stage)btnYes.getScene().getWindow();
		primaryStage.setScene(scene);
	}
	public void MbtiResultNo() throws Exception{
		Parent second = FXMLLoader.load(getClass().getResource("MbtiResult.fxml") );
		Scene scene = new Scene(second);
		Stage primaryStage = (Stage)btnNo.getScene().getWindow();
		primaryStage.setScene(scene);
	}

	public String QuestiongetResult() {
		StringBuilder result = new StringBuilder();
		result.append(scores[0] > 2 ? "E" : "I");
		result.append(scores[1] > 2 ? "S" : "N");
		result.append(scores[2] > 2 ? "F" : "T");
		result.append(scores[3] > 2 ? "J" : "P");
		return result.toString();
	}
}
