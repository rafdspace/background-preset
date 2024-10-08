import { Button, Rows, Text } from "@canva/app-ui-kit";

interface SelectImagePanelProps {
  isLoading?: boolean;
  isImageSaving?: boolean;
  isCanOpenOverlay?: boolean;
  handleOpenOverlay: () => void;
}

const SelectImagePanel = (props: SelectImagePanelProps) => {
  const {
    isLoading,
    isImageSaving,
    isCanOpenOverlay = false,
    handleOpenOverlay,
  } = props;

  return (
    <Rows spacing="2u">
      <Text
        alignment="start"
        capitalization="default"
        size="medium"
        variant="regular"
      >
        Select an image to edit its background.
      </Text>

      <Button
        variant="primary"
        disabled={!isCanOpenOverlay || isImageSaving}
        onClick={handleOpenOverlay}
        loading={isLoading}
      >
        Open background editor
      </Button>
    </Rows>
  );
};

export default SelectImagePanel;
