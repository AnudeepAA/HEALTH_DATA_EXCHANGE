export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getBalance' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
    'hasNFT' : IDL.Func([IDL.Principal], [IDL.Bool], ['query']),
    'mintNFT' : IDL.Func([IDL.Principal], [IDL.Text], []),
    'uploadEncryptedRecord' : IDL.Func(
        [IDL.Principal, IDL.Text],
        [IDL.Text],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
