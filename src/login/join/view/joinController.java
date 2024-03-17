package login.join.view;

import java.io.IOException;
import java.net.*;
import java.util.ResourceBundle;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import common.CommonService;
import javafx.application.Platform;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.stage.Stage;
import login.*;
import member.dao.MemberDAO;
import member.dto.MemberDTO;

public class joinController implements Initializable {
	@FXML
	private TextField tfid, tfemail, tfname, tftel;
	@FXML
	private PasswordField tfpwd, tfpwd2;
	@FXML
	private Button btnoverlapid, btnoverlapemail;
	@FXML
	private ComboBox<String> cmbnewsagency;

	MemberDAO dao;
	
	@Override
	public void initialize(URL arg0, ResourceBundle arg1) {
		// TODO Auto-generated method stub
		String[] cmbtxt = {"SKT", "KT", "LGU+"};
		cmbnewsagency.getItems().addAll(cmbtxt);
		btnoverlapid.setOnAction(event->{
			try {
				String id,str;
				LoginService2 log = new LoginServiceImpl2();
				id = tfid.getText();
				System.out.println(id);
				MemberDTO se = log.idsearch(id);
				System.out.println("dto : "+se);
				if(se == null) {
					str = "사용가능한 아이디입니다.";
					
				}else {
					str = "사용불가능한 아이디입니다.";
					
				}
				handleBtnoverlapid(event,str);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		});
		btnoverlapemail.setOnAction(event->{
			try {
				String email,str;
				LoginService2 log = new LoginServiceImpl2();
				email = tfemail.getText();
				MemberDTO se = log.emailsearch(email);
				
				if(se == null) {
					str = "사용가능한 이메일입니다.";
					
				}else {
					str = "사용불가능한 이메일입니다.";
					
				}
				handleBtnoverlapemail(event,str);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		});
		

	}
	public void handlejoin() {
		LoginService2 log = new LoginServiceImpl2();
		dao = new MemberDAO();
		Matcher matcher;
		String mbti = dao.getMbtiTemporarySave();
		String newsagency = cmbnewsagency.getValue();
		String name = tfname.getText();
		String id = tfid.getText();
		System.out.println(id);
		String pwd = tfpwd.getText();
		String pwd2 = tfpwd2.getText();
		String tel = tftel.getText();
		String email = tfemail.getText();
		matcher = EmailValidation(email);
		
		if(tfid.getText().isEmpty()) {
			String str = "아이디를 입력해주세요";
        	CommonService.myAlert(str);
		}else if(tfpwd.getText().isEmpty()){
			String str = "비번을 입력해주세요";
        	CommonService.myAlert(str);
		}else if(tfpwd2.getText().isEmpty()){
			String str = "비번을 입력해주세요";
        	CommonService.myAlert(str);
		}else if(tfemail.getText().isEmpty()){
			String str = "이메일을 입력해주세요";
        	CommonService.myAlert(str);
		}else if(tfname.getText().isEmpty()){
			String str = "이름을 입력해주세요";
        	CommonService.myAlert(str);
		}else if(tftel.getText().isEmpty()){
			String str = "전화번호를 입력해주세요";
        	CommonService.myAlert(str);
		}else if(newsagency == null){
			String str = "통신사를 선택해주세요";
        	CommonService.myAlert(str);
		}else if(email != null) {
			if(matcher.matches()) {
				if(pwd.equals(pwd2)) {
					if(pwd.length() <= 12) {
						if(tel.contains("-")) {
							String str = "- 빼고 입력해주세요";
							CommonService.myAlert(str);
						}else {
							if(tel.length() == 11) {
								log.register(name, id, pwd, newsagency, tel, email, mbti);
								String str = "가입 완료됬습니다";
								CommonService.myAlert(str);
							}else {
								String str = "11자리 입력해주세요";
								CommonService.myAlert(str);
							}
						}
					}else {
						String str = "12자리까지 입력해주세요";
			            CommonService.myAlert(str);
					}
	            }else {
	            	String str = "비번을 다시 확인해주세요";
	            	CommonService.myAlert(str);
	            }
			}else {
	            String str = email + "은(는) 유효하지 않은 이메일 형식입니다.";
	            CommonService.myAlert(str);
	        }
		}
       
        
		//log.register(name, id, pwd, newsagency, tel, email, mbti);
	}
	public void handleBtnoverlapid(ActionEvent event,String str) throws IOException{
		CommonService.myAlert(str);
	}
	public void handleBtnoverlapemail(ActionEvent event,String str) throws IOException{
		CommonService.myAlert(str);
	}
	public void join(String name, String id, String pwd,String pwd2,
			String newsagency,String tel,String email) {
		
	}
	public Matcher EmailValidation(String email) {
        // 이메일 형식을 검증하기 위한 정규 표현식
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";

        // 정규 표현식을 기반으로 Pattern 객체 생성
        Pattern pattern = Pattern.compile(emailRegex);

        // 생성된 Pattern으로 Matcher 객체 생성
        Matcher matcher = pattern.matcher(email);

        
        return matcher;
	}
	public void PwdLimit(String pwd) {
		
	}
}
