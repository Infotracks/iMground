package login;

import java.util.ArrayList;

import member.dto.MemberDTO;

public interface LoginService2 {
	public int register
	(String name, String id, String pwd,
			String newsagency,String tel,String email,String mbti);

	public MemberDTO idsearch(String id);
	public MemberDTO emailsearch(String email);
	public MemberDTO pwdsearch(String pwd);
	public ArrayList<MemberDTO> search(String email);
	public int pwdchange(MemberDTO dto );
	public ArrayList<MemberDTO> search2(String id );

}
