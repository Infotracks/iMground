package mbti.question;

import javafx.fxml.FXML;
import javafx.scene.Parent;
import javafx.scene.control.Label;

public class Question {
	private String[] questions = {
			"Q1 프로젝트를 하면서 팀원들과 이야기 나누는 것이 즐겁다",
			"Q2 분할 작업에서 어려움을 느낄 때 팀원들과 함께 의논하여 해결하는 편이다",
			"Q3 강의실에서 다른 팀원들과도 이야기를 나눠보고 싶은 생각이 종종 든다",
			"Q4 강의실 내 누구나 먼저 다가가서 쉽게 말을 걸 수 있다",
			"Q5 프로젝트를 혼자보다 여럿이 하고 싶다",
			"Q6 프로젝트를 기획할 때 과거의 경험에 많이 의존하는 편이다",
			"Q7 프로젝트 중 주관적으로 괜찮은 아이디어가 생기면 바로 실행할 것이다",
			"Q8 정해진 프로젝트에서 나와 다른 의견을 가지는 팀원을 이해하기 어렵다",
			"Q9 프로젝트 중 내가 어떤 일을 해야 하는지 명확히 이해하고 있다",
			"Q10 프로젝트 중 팀원의 아이디어에 구체적이고 해결될만한 질문을 많이 하는 편이다",
			"Q11 프로젝트 중 팀원이 잘 따르지 않을 때 감정적으로 반응한다",
			"Q12 프로젝트에서 팀원이 지적한 말이 머릿속에 자주 남는 편이다",
			"Q13 팀원 간의 갈등이나 의견 충돌이 발생하면, 이 상황을 회피하고 싶다",
			"Q14 프로젝트를 진행할 때 일정과 계획보다는 소통과 협력이 더 중요하다고 생각한다",
			"Q15 나는 팀원의 행동, 말투, 생각을 대체로 이해하려고 노력한다",
			"Q16 프로젝트를 시작하기 전에 철저한 계획을 세우는 편이다",
			"Q17 누가 역할 분담을 해주지 않아도 알아서 프로젝트를 할 수 있다",
			"Q18 일이 주어지면 마감 기간을 정확히 지키는 편이다",
			"Q19 해야 할 일을 마지막까지 미루지 않는다",
			"Q20 프로젝트 중 팀원이 잘 따르지 않을 때 어떻게 하면 내보낼 수 있을지 계획한다"
	};

	public String[] getQuestions() {
		return questions;
	}
}
