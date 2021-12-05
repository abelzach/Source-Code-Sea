pragma solidity ^0.8.0;

//import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract SourceCodeSea is ERC721, ERC721URIStorage {

    address gctAddress;

    mapping(address => string) programmers;

    uint public sCount;
    
    mapping(uint => CODE) public codes;

    struct CODE {
        uint id;
        uint price;
        bool isListed;
        string name;
        string description;
        string filecid;
        string aName;
        address prgmer;
        address payable owner;
    }

    constructor() ERC721("SourceCodeSea NFT", "SCS") { }

    modifier idExists(uint id) {
        require(id > 0 && id <= sCount);
        _;
    }

    event createdCODE(
        uint id,
        string name,
        address owner
    );

    event setCODEPrice(
        uint id,
        uint newPrice,
        bool listed
    );

    event offerApproved(
        uint id,
        uint codeID,
        uint amount,
        bool approved
    );

    event boughtCODE(
        uint id,
        address buyer
    );

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
      super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
        {
            return super.tokenURI(tokenId);
        }

    function registerProgrammer(string memory _name) external {
        programmers[msg.sender] = _name;
    }

    function createCODE(string memory _name,string memory _desc, string memory _filecid, uint256 _price) external {
        require(bytes(_name).length > 0 && bytes(_filecid).length > 0, "Name and file required");
        sCount++;
        codes[sCount] = CODE(sCount, _price, true, _name, _desc, _filecid, programmers[msg.sender], msg.sender, payable(msg.sender));
        emit createdCODE(sCount, codes[sCount].name, codes[sCount].owner);
    }

    function buyCODE(uint256 _id) external payable idExists(_id) {
        require(msg.value >= codes[_id].price, "Insufficient amount");
        codes[_id].owner.transfer(msg.value);
        _safeMint(msg.sender, _id);
        _setTokenURI(_id, codes[_id].filecid);
        codes[_id].owner = payable(msg.sender);
        codes[_id].isListed = false;
        emit boughtCODE(_id, codes[_id].owner);
    }
} 