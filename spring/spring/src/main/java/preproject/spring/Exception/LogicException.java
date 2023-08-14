package preproject.spring.Exception;

import lombok.Getter;

public class LogicException extends RuntimeException{

    @Getter
    private final ExceptionCode exceptionCode;

    public LogicException(ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }
}
