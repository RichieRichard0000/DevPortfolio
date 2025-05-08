import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X } from "lucide-react";
// Import elab image when it's available
// import eLabImage from "@assets/elab.png";

type ELabModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ELabModal({ isOpen, onClose }: ELabModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[90vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold flex items-center justify-between">
            <span>E-LAB Completion Status</span>
            <button 
              onClick={onClose} 
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </DialogTitle>
          <DialogDescription>
            Detailed view of my E-LAB completion progress
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-auto max-h-[70vh]">
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <p className="text-lg text-gray-700 mb-4">
              Please upload your E-LAB completion status image (elab.png) to display here.
            </p>
            <p className="text-sm text-gray-500">
              The image will automatically be displayed once uploaded to client/src/assets/elab.png
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}