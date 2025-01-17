// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Импортируем стандартный код ERC-20 из OpenZeppelin
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract UniversityToken is ERC20 {
    // Событие для регистрации информации о транзакциях
    event TransactionInfo(
        address indexed sender,
        address indexed receiver,
        uint256 amount,
        uint256 timestamp
    );

    // Хранение информации о последней транзакции
    address private lastSender;
    address private lastReceiver;
    uint256 private lastTimestamp;

    constructor() ERC20("AituSE2320", "UTK") {
        // Выпуск начального количества токенов
        _mint(msg.sender, 2000 * 10 ** decimals());
    }

    // Переопределяем функцию transfer для отслеживания транзакций
    function transfer(address recipient, uint256 amount)
        public
        override
        returns (bool)
    {
        // Вызываем оригинальный transfer
        bool success = super.transfer(recipient, amount);

        if (success) {
            // Сохраняем информацию о транзакции
            lastSender = msg.sender;
            lastReceiver = recipient;
            lastTimestamp = block.timestamp;

            // Вызываем событие
            emit TransactionInfo(msg.sender, recipient, amount, block.timestamp);
        }

        return success;
    }

    // Функция для получения времени последней транзакции (в человекочитаемом формате)
    function getLastTransactionTimestamp() public view returns (string memory) {
        uint256 ts = lastTimestamp;
        return _convertTimestampToReadableFormat(ts);
    }

    // Функция для получения адреса отправителя последней транзакции
    function getLastTransactionSender() public view returns (address) {
        return lastSender;
    }

    // Функция для получения адреса получателя последней транзакции
    function getLastTransactionReceiver() public view returns (address) {
        return lastReceiver;
    }

    // Внутренняя функция для преобразования timestamp в человекочитаемый формат
    function _convertTimestampToReadableFormat(uint256 timestamp)
        internal
        pure
        returns (string memory)
    {
        // Простая строка с числовым временем (можно заменить на более сложный формат)
        return string(abi.encodePacked("Timestamp: ", uint2str(timestamp)));
    }

    // Вспомогательная функция для преобразования uint256 в строку
    function uint2str(uint256 _i) internal pure returns (string memory) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint256 k = len - 1;
        while (_i != 0) {
            bstr[k--] = bytes1(uint8(48 + (_i % 10)));
            _i /= 10;
        }
        return string(bstr);
    }
}
