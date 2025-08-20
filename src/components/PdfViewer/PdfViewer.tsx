const PDFViewer: React.FC = () => {
  return (
    <div>
      <iframe
        src="resume.pdf#navpanes=0#zoom=100"
        width="100%"
        height="1100"
        title="PDF Resume"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default PDFViewer;
