
for NAME in js/*; do
    uglifyjs $NAME -o $NAME
done

for NAME in css/*; do
    csso $NAME --output $NAME
done

for NAME in sub/*; do
    minify $NAME > $NAME.d
    rm $NAME
    mv $NAME.d $NAME
done
