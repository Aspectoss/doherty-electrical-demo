import {
  sectionContainer,
  sectionHeading,
  sectionLabel,
  sectionLead,
} from "@/lib/sectionStyles";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const descriptionAlignment =
    align === "left" ? "max-w-2xl text-left" : "mx-auto max-w-2xl text-center";

  return (
    <div className={align === "left" ? "text-left" : "text-center"}>
      <p className={sectionLabel}>{label}</p>
      <h2 className={sectionHeading}>{title}</h2>
      {description && (
        <p className={`${sectionLead} ${descriptionAlignment}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export function SectionContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`${sectionContainer} ${className}`}>{children}</div>;
}
