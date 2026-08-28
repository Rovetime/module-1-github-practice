import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function ProductCard({
  image,
  name,
  category,
  price,
  quantity,
  accent,
  saved,
  onToggleSaved,
}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <View style={styles.body}>
        <Text style={styles.category}>{category}</Text>

        <Text style={styles.name}>{name}</Text>

        <View style={styles.metaRow}>
          <Text style={styles.price}>${price.toFixed(2)}</Text>

          <Text style={[styles.stock, { color: accent }]}>
            {quantity === 0
              ? 'SOLD OUT'
              : quantity <= 5
                ? `LOW STOCK · ${quantity}`
                : `IN STOCK · ${quantity}`}
          </Text>
        </View>

        <Pressable onPress={onToggleSaved} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>
            {saved ? 'SAVED ✓' : 'SAVE ITEM'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#151821',
    borderColor: '#272B38',
    borderRadius: 24,
    borderWidth: 1,
    marginBottom: 18,
    overflow: 'hidden',
  },

  image: {
    height: 210,
    width: '100%',
  },

  body: {
    padding: 18,
  },

  category: {
    color: '#8E95A8',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },

  name: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    marginTop: 6,
  },

  metaRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },

  price: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },

  stock: {
    color: '#AAB2C8',
    fontSize: 12,
    fontWeight: '800',
  },

  saveButton: {
    alignItems: 'center',
    borderColor: '#3E4560',
    borderRadius: 14,
    borderWidth: 1,
    marginTop: 16,
    paddingVertical: 12,
  },

  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
  },
});