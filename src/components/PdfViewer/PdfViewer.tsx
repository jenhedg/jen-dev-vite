const PDFViewer: React.FC = () => {
  return (
    <div>
      <iframe
        src="/src/assets/resume.pdf#navpanes=0#zoom=100"
        width="100%"
        height="2000"
        title="PDF Resume"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default PDFViewer;
