package member.dto;

public class MemberDTO {
	// UID 
    private Integer userUid;

    // �г��� 
    private String userNick;

    // �̸� 
    private String userName;

    // ���̵� 
    private String userId;

    // �н����� 
    private String userPwd;

    // ��ȭ��ȣ 
    private String userTel;
    
    // ��Ż�
    private String userNewsAgency;

    // �̸��� 
    private String userEmail;

    // MBTI ���� 
    private String userMbti;

    // sns ���� 
    private String userSns;
    
    // ����/ī�� ����
    private String userAcount;

    public Integer getUserUid() {
        return userUid;
    }

    public void setUserUid(Integer userUid) {
        this.userUid = userUid;
    }

    public String getUserNick() {
        return userNick;
    }

    public void setUserNick(String userNick) {
        this.userNick = userNick;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserPwd() {
        return userPwd;
    }

    public void setUserPwd(String userPwd) {
        this.userPwd = userPwd;
    }

    public String getUserTel() {
        return userTel;
    }

    public void setUserTel(String userTel) {
        this.userTel = userTel;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserMbti() {
        return userMbti;
    }

    public void setUserMbti(String userMbti) {
        this.userMbti = userMbti;
    }

    public String getUserSns() {
        return userSns;
    }

    public void setUserSns(String userSns) {
        this.userSns = userSns;
    }

	public String getUserNewsAgency() {
		return userNewsAgency;
	}

	public void setUserNewsAgency(String userNewsAgency) {
		this.userNewsAgency = userNewsAgency;
	}

	public String getUserAcount() {
		return userAcount;
	}

	public void setUserAcount(String userAcount) {
		this.userAcount = userAcount;
	}
    
}
