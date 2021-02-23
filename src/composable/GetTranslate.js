import { ref } from 'vue';
import { db } from '../firebase/config';

const GetTranslate = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            await db.collection('Translation').where('IsDeleted', '==', 0)
                .onSnapshot(snap => {
                    posts.value = snap.docs.map(doc => {
                        console.log(doc.data());
                        return {
                            ...doc.data(),
                            id: doc.id
                        }
                    });
                });
        } catch (err) {
            error.value = err.message
        }

    }

    return { posts, error, load }
}

export default GetTranslate; 