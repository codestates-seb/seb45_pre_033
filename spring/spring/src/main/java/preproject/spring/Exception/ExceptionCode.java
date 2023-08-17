package preproject.spring.Exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_NOT_FOUND(404, "User Not found..."),
    USER_EXISTS(409, "User Already exists!"),
    QUESTION_NOT_FOUND(404, "Question not found..."),
    TAG_NOT_FOUND(404, "Tag not found..."),
    ANSWER_FOUND(404, "Answer not found..."),
    CANNOT_APPLY(403, "can not change, check your conditions"),
    NOT_IMPLEMENTATION(501, "Not Implementation"),
    SERVER_ERROR(500, "SERVER ERROR !!!"),
    INVALID(400, "Invalid status, check your request");

    @Getter
    private final int status;

    @Getter
    private final String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}

