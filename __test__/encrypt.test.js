const cipher = require("../src/services/cipher");

describe("testes", () => {
  it("it should return a phrase enctypted with cesar3", () => {
    const encryptedPhrase = cipher.encryptCesar3(
      "a ligeira raposa marrom saltou sobre o cachorro cansado"
    );

    expect(encryptedPhrase).toBe(
      "d oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgr"
    );
  });

  it("it should return a uncrypted phrasewith cesar3", () => {
    const uncryptedPhrase = cipher.uncryptCesar3(
      "d oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgr"
    );

    expect(uncryptedPhrase).toBe(
      "a ligeira raposa marrom saltou sobre o cachorro cansado"
    );
  });

  it("it should return a phrase enctypted with a random cipher number", () => {
    const encryptPhraseWithRandomCipherNumber = cipher.crypt(
      "a ligeira raposa marrom saltou sobre o cachorro cansado",
      10
    );

    expect(encryptPhraseWithRandomCipherNumber).toBe(
      "k vsqosbk bkzyck wkbbyw ckvdye cylbo y mkmrybby mkxckny"
    );
  });

  it("it should return a phrase unctypted with a random cipher number", () => {
    const uncryptPhraseWithRandomCipherNumber = cipher.crypt(
      "k vsqosbk bkzyck wkbbyw ckvdye cylbo y mkmrybby mkxckny",
      -10
    );

    expect(uncryptPhraseWithRandomCipherNumber).toBe(
      "a ligeira raposa marrom saltou sobre o cachorro cansado"
    );
  });
});
