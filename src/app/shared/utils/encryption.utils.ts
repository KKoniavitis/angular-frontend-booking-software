import * as openpgp from "@protontech/openpgp";

export const pgpDecryptor = async (encryptedText: string, encryptionKey: string): Promise<string | null> => {
  if (!encryptedText?.length || !encryptionKey?.length) {
    return null;
  }

  const { data } = await openpgp.decrypt({
    message: await openpgp.readMessage({ armoredMessage: encryptedText }),
    passwords: [encryptionKey]
  });

  return data as string;
};
