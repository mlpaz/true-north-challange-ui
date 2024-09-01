import { Record } from "@/types";
import { formatDate } from "@/utils/date";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { UUID } from "crypto";
export const DETAIL_MODAL = "detail";
export const DELETE_CONFIRMATION_MODAL = "deleteConfirmation";

export type ModalTye = "detail" | "deleteConfirmation";

export type ModalSizeType =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "full";

const modalConfig = {
  detail: { size: "xl", title: " Record Detail" },
  deleteConfirmation: { size: "lg", title: " Delete Confirmation" },
};

export default function TableModal({
  isOpen,
  onOpenChange,
  rec,
  modalType,
  handlerDelete,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  rec: Record | undefined;
  modalType: ModalTye;
  handlerDelete: (id: UUID) => void;
}) {
  if (!rec) {
    return <></>;
  }
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop={"blur"}
      size={modalConfig[modalType].size as ModalSizeType}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center text-2xl mb-1">
              {modalConfig[modalType].title}
            </ModalHeader>
            {DETAIL_MODAL === modalType && <DetailBody rec={rec} />}
            {DELETE_CONFIRMATION_MODAL === modalType && (
              <DeleteConfirmationBody rec={rec} />
            )}
            <ModalFooter>
              {DELETE_CONFIRMATION_MODAL === modalType && (
                <Button
                  color="danger"
                  onPress={async () => {
                    await handlerDelete(rec?.id);
                    onClose();
                  }}
                >
                  Confirm
                </Button>
              )}
              <Button color="primary" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

function DeleteConfirmationBody({ rec }: { rec: Record | undefined }) {
  let formatedDate: string = "";
  if (rec?.date) {
    const date: Date = new Date(rec?.date);
    formatedDate = formatDate(date);
  }
  return (
    <ModalBody className="text-center text-default-500">
      Are you sure you want to delete the {rec?.type} record, Performed on date{" "}
      {formatedDate} ?
    </ModalBody>
  );
}

function DetailBody({ rec }: { rec: Record | undefined }) {
  let formatedDate: string = "";
  if (rec?.date) {
    const date: Date = new Date(rec?.date);
    formatedDate = formatDate(date);
  }

  return (
    <ModalBody className="grid grid-cols-2">
      <DetailEntry label="Operation" value={rec?.type || ""} />
      <DetailEntry label="Amount" value={`${rec?.amount || ""}`} />
      <DetailEntry label="Balance" value={`${rec?.userBalance || ""}`} />
      <DetailEntry label="Date" value={formatedDate} />
      <div className="w-fit flex col-span-2 text-default-500">
        <span className="mr-2"> Result: </span>
        <b className=" whitespace-pre-line">{rec?.operationResponse}</b>
      </div>
    </ModalBody>
  );
}

function DetailEntry({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-default-500 ">
      <label> {label} :</label> <b>{value}</b>
    </div>
  );
}
