interface CollectionInfoProps {
  title: string;
  description: string;
}

export const CollectionInfo: React.FC<CollectionInfoProps> = ({
  title,
  description,
}) => {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-6">
            {title}
          </h2>
          <p className="text-background/80 text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
