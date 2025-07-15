
import Principal "mo:base/Principal";
import Array "mo:base/Array";

actor HealthVault {
  stable var nftOwners: [Principal] = [];
  stable var balances: [(Principal, Nat)] = [];
  stable var records: [(Principal, Text)] = [];

  public func mintNFT(user: Principal): async Text {
    if (Array.find<Principal>(nftOwners, func(p) { p == user }) == null) {
      nftOwners := Array.append<Principal>(nftOwners, [user]);
      return "NFT Minted for user: " # Principal.toText(user);
    } else {
      return "NFT already exists for user";
    }
  };

  public func uploadEncryptedRecord(user: Principal, encryptedData: Text): async Text {
    records := Array.append<(Principal, Text)>(records, [(user, encryptedData)]);
    var found = false;
    for ((p, _bal) in balances.vals()) {
      if (p == user) found := true;
    };
    if (not found) {
      balances := Array.append<(Principal, Nat)>(balances, [(user, 10)]);
    };
    return "Encrypted record uploaded and 10 ICP rewarded.";
  };

  public query func getBalance(user: Principal): async Nat {
    for ((p, bal) in balances.vals()) {
      if (p == user) return bal;
    };
    return 0;
  };

  public query func hasNFT(user: Principal): async Bool {
    for (p in nftOwners.vals()) {
      if (p == user) return true;
    };
    return false;
  };
}
