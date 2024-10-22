const CardDetailItem = ({ label, value, children }) => (
  <div className="flex items-center gap-2">
    <span className="text-muted-foreground text-xs sm:text-sm">{label}:</span>
    {value && <span className="text-sm sm:text-base">{value}</span>}
    {children}
  </div>
);

export default CardDetailItem;
